(function() {
  // Prototype
  function Slider(slider) {
    if (!slider || !(slider instanceof Element)) {
      console.info("No Slider Passed!");
      return;
    }
    // Get Your Variables & Elements
    this.slider = slider;
    this.slides = slider.querySelector('[data-ref="Slider.slides"]');
    const prevButton = slider.querySelector('[data-ref="PrevButton"]');
    const nextButton = slider.querySelector('[data-ref="NextButton"]');
    // Bound Functions
    // this.boundMove = this.move.bind(this);
    // Event Listeners
    prevButton.addEventListener("click", () => {
      this.move("back");
    });
    nextButton.addEventListener("click", this.move.bind(this));
    // Functions That Run Immediately
    this.startSlider();
    this.applyClasses();
  }
  // Prototype Methods
  Slider.prototype.startSlider = function() {
    this.current =
      this.slider.querySelector(".current") || this.slides.firstElementChild;
    this.previous = this.getPrevElem(this.current);
    this.next = this.getNextElem(this.current);
  };

  Slider.prototype.applyClasses = function() {
    this.current.classList.add("current");
    this.previous.classList.add("prev");
    this.next.classList.add("next");
  };
  Slider.prototype.move = function(direction) {
    this.removeClasses();
    if (direction === "back") {
      // Make a new array of the new values and destructure them
      [this.previous, this.current, this.next] = [
        this.getPrevElem(this.previous),
        this.previous,
        this.current
      ];
    } else {
      [this.previous, this.current, this.next] = [
        this.current,
        this.next,
        this.getNextElem(this.next)
      ];
    }
    this.applyClasses();
  };
  Slider.prototype.removeClasses = function() {
    const classesToRemove = ["prev", "current", "next"];
    this.previous.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
  };
  Slider.prototype.getPrevElem = function(elem) {
    return elem.previousElementSibling || this.slides.lastElementChild;
  };
  Slider.prototype.getNextElem = function(elem) {
    return elem.nextElementSibling || this.slides.firstElementChild;
  };

  // Adding It To The Page
  document.querySelectorAll('[data-ref="Slider"]').forEach(slider => {
    const sliderPro = new Slider(slider);
    console.log(sliderPro);
  });
})();
