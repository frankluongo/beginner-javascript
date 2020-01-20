function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No Gallery Found!");
  }
  this.gallery = gallery;
  // Select Elements We Need
  this.images = Array.from(gallery.querySelectorAll("img"));
  this.modal = document.querySelector('[data-ref="Modal"]');
  this.prevButton = this.modal.querySelector('[data-ref="Previous"]');
  this.nextButton = this.modal.querySelector('[data-ref="Next"]');

  // Bound Functions

  this.boundHandleImageInteraction = this.handleImageInteraction.bind(this);
  this.boundShowNextImage = this.showNextImage.bind(this);
  this.boundShowPrevImage = this.showPreviousImage.bind(this);
  this.boundHandleClickOutside = this.handleClickOutside.bind(this);
  this.boundHandleKeyup = this.handleKeyup.bind(this);

  // Events

  this.images.forEach(image => {
    image.addEventListener("click", this.boundHandleImageInteraction);
    image.addEventListener("keyup", event => {
      if (event.key === "Enter") {
        this.handleImageInteraction(event);
      }
    });
  });
  this.modal.addEventListener("click", this.boundHandleClickOutside);
}

// Handlers

Gallery.prototype.handleImageInteraction = function({ currentTarget }) {
  this.addImageToModal(currentTarget);
  this.openModal();
};

Gallery.prototype.handleClickOutside = function(event) {
  if (event.target === event.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyup = function(event) {
  if (event.key === "Escape") {
    return this.closeModal();
  }
  if (event.key === "ArrowRight") {
    return this.showNextImage();
  }
  if (event.key === "ArrowLeft") {
    return this.showPreviousImage();
  }
};

// Actions
Gallery.prototype.openModal = function() {
  if (this.modal.matches(".open")) {
    console.info("Modal already open");
    return;
  }
  this.modal.classList.add("open");
  window.addEventListener("keyup", this.boundHandleKeyup);
  this.nextButton.addEventListener("click", this.boundShowNextImage);
  this.prevButton.addEventListener("click", this.boundShowPrevImage);
};

Gallery.prototype.closeModal = function() {
  this.modal.classList.remove("open");
  window.removeEventListener("keyup", this.boundHandleKeyup);
  this.nextButton.removeEventListener("click", this.boundShowNextImage);
  this.prevButton.removeEventListener("click", this.boundShowPrevImage);
};

Gallery.prototype.addImageToModal = function(el) {
  if (!el) {
    console.info("No image to show!");
    return;
  }
  this.modal.querySelector("img").src = el.src;
  this.modal.querySelector("h2").textContent = el.title;
  this.modal.querySelector("figure p").textContent = el.dataset.description;
  this.currentImage = el;
};

Gallery.prototype.showNextImage = function() {
  this.addImageToModal(
    this.currentImage.nextElementSibling || gallery.firstElementChild
  );
};

Gallery.prototype.showPreviousImage = function() {
  this.addImageToModal(
    this.currentImage.previousElementSibling || gallery.lastElementChild
  );
};

const galleries = document.querySelectorAll('[data-ref="Gallery"]');
galleries.forEach(gallery => {
  const gal = new Gallery(gallery);
  console.log(gal);
});
