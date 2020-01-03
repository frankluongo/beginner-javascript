class EtchASketch {
  constructor() {
    this.coords = {
      x: this.generateRandomValue(this.width),
      y: this.generateRandomValue(this.height)
    };
    this.hue = 0;
    this.setCanvasContextSettings();
    this.setInitialDotLocation();
    this.listenForKeydown();
    this.listenForShakeButtonClicks();
  }
  // Select Elements on The Page & Get Our Variables
  get canvas() {
    return document.querySelector("#etch-a-sketch");
  }
  get ctx() {
    return this.canvas.getContext("2d");
  }
  get shakeButton() {
    return document.querySelector(".shake");
  }

  get width() {
    return this.canvas.width;
  }

  get height() {
    return this.canvas.height;
  }

  get MOVE_AMOUNT() {
    return 10;
  }

  //
  // Setup our Canvas For Drawing
  //
  setCanvasContextSettings() {
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = this.MOVE_AMOUNT;
  }

  setInitialDotLocation() {
    const { coords, ctx, hue, setPathDetails } = this;
    setPathDetails({
      ctx,
      startX: coords.x,
      startY: coords.y,
      endX: coords.x,
      endY: coords.y,
      hue
    });
  }
  //
  // Write a Draw Function
  //

  draw({ key }) {
    const { coords, ctx, setPathDetails, MOVE_AMOUNT } = this;
    // Start the path
    this.hue += 1;
    const startX = coords.x;
    const startY = coords.y;
    // Move our x and y values depending on the user's actions
    switch (key) {
      case "ArrowUp":
        coords.y -= MOVE_AMOUNT;
        break;
      case "ArrowDown":
        coords.y += MOVE_AMOUNT;
        break;
      case "ArrowLeft":
        coords.x -= MOVE_AMOUNT;
        break;
      case "ArrowRight":
        coords.x += MOVE_AMOUNT;
        break;
      default:
        break;
    }
    setPathDetails({
      ctx,
      startX,
      startY,
      endX: coords.x,
      endY: coords.y,
      hue: this.hue
    });
  }

  //
  // Write a Handler For The Keys
  //

  handleKey(event) {
    if (event.key.includes("Arrow")) {
      event.preventDefault();
      this.draw({
        key: event.key
      });
    }
  }

  //
  // Listen For Arrow Keys
  //

  listenForKeydown() {
    window.addEventListener("keydown", this.handleKey.bind(this));
  }

  //
  // Listen for Button Clicks
  //

  listenForShakeButtonClicks() {
    this.shakeButton.addEventListener("click", this.clearCanvas.bind(this));
  }

  //
  // Clear / Shake Function
  //

  clearCanvas() {
    this.clearCanvasAppearance();
    this.shakeCanvas();
  }

  //
  // Clear Canvas Styling
  //

  shakeCanvas() {
    this.canvas.classList.add("shake");
    this.canvas.addEventListener(
      "animationend",
      () => {
        this.canvas.classList.remove("shake");
      },
      { once: true }
    );
  }

  clearCanvasAppearance() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  //
  // Helpers
  //
  generateRandomValue(boundary) {
    return Math.floor(Math.random() * boundary);
  }

  setPathDetails({ ctx, hue, startX, startY, endX, endY }) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
}

new EtchASketch();
