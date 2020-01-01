class EtchASketch {
  constructor() {
    this.setCanvasContextSettings();
    this.setInitialDotLocation();
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

  // Setup our Canvas For Drawing
  setCanvasContextSettings() {
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = 10;
  }

  setInitialDotLocation() {
    const { ctx, width, height } = this;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200, 200);
    ctx.stroke();
  }

  // Helpers

  generateRandomValue() {}
}

new EtchASketch();

// Write a Draw Function

// Write a Handler For The Keys

// Clear / Shake Function

// Listen For Arrow Keys
