const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector();
const optionsInputs = document.querySelectorAll(
  '.controls input[type="range"]'
);

const options = {
  SIZE: 10,
  SCALE: 1.35,
};

function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
}
optionsInputs.forEach(input => input.addEventListener('input', handleOption));

// Write a fucntion that will populate the users video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  // size the canvases to be the same size as the video
  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  // ask the browser when the next animation frame is, and tell it to run detect for us
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // draw the small face
  faceCtx.drawImage(
    // 5 source args
    video, // where does the source come from?
    face.x, // where do we start the source pull from?
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x, // where should we start drawing the x and y?
    face.y,
    options.SIZE,
    options.SIZE
  );
  // draw the small face back on, but scale up

  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    faceCanvas, // source
    face.x, // where do we start the source pull from?
    face.y,
    options.SIZE,
    options.SIZE,
    // Drawing args
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}

populateVideo().then(detect);
/*
const SIZE = 10;
const SCALE = 1.5;

class FaceDetector {
  constructor() {
    this.populateVideo().then(this.detectFaces.bind(this));
  }

  get video() {
    return document.querySelector('.webcam');
  }

  get canvas() {
    return document.querySelector('.video')
  }

  get canvasCtx() {
    return this.canvas.getContext('2d');
  }

  get faceCanvas() {
    return document.querySelector('.face');
  }

  get faceCtx() {
    return this.faceCanvas.getContext('2d')
  }

  get faceDetector() {
    return new window.FaceDetector();
  }

  async populateVideo() {
    this.stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 1280, height: 720 }
    })
    this.video.srcObject = this.stream;
    await this.video.play();
    this.setElementsSize({ height: this.video.videoHeight, width: this.video.videoWidth }, [this.canvas, this.faceCanvas])
  }

  async detectFaces() {
    this.faces = await this.faceDetector.detect(this.video);
    this.faces.forEach(this.drawFace.bind(this))
    this.faces.forEach(this.censor.bind(this))
    requestAnimationFrame(this.detectFaces.bind(this))
  }

  drawFace(face) {
    const { width, height, top, left } = face.boundingBox;
    this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvasCtx.strokeStyle = '#ffc600';
    this.canvasCtx.lineWidth = 2;
    this.canvasCtx.strokeRect(left, top, width, height);
  }

  censor({ boundingBox: face }) {
    this.faceCtx.imageSmoothingEnabled = false;
    this.faceCtx.clearRect(0, 0, this.faceCanvas.width, this.faceCanvas.height)
    // Draw the Small Face
    this.faceCtx.drawImage(
      this.video,
      face.x,
      face.y,
      face.width,
      face.height,
      SIZE,
      SIZE
    );
    // Scale Small Face Back Up
    this.faceCtx.drawImage(
      this.faceCanvas,
      face.x,
      face.y,
      SIZE,
      SIZE,
      face.x,
      face.y,
      face.width,
      face.height
    )

  }

  //
  // HELPERS
  //

  setElementsSize({ height, width }, elements) {
    elements.forEach(element => {
      element.height = height;
      element.width = width;
    })
  }

}

new FaceDetector();
*/
