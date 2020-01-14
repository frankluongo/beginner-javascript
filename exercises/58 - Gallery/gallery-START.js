class Gallery {
  constructor(galleryElement) {
    if (!galleryElement) {
      throw new Error("No Gallery Found");
    }
    this.gallery = galleryElement;
    this.defineVars();
    this.observeElements();
  }

  defineVars() {
    this.images = Array.from(this.gallery.querySelectorAll("img"));
    this.modal = document.querySelector(".modal");
    this.prevBtn = this.modal.querySelector(".prev");
    this.nextBtn = this.modal.querySelector(".next");
    this.currentImg = null;
  }

  // Listeners

  observeElements() {
    this.images.forEach(image =>
      image.addEventListener("click", event => {
        this.showImage(event.currentTarget);
      })
    );
    this.nextBtn.addEventListener("click", this.showNextImage.bind(this));
  }

  // Handlers

  handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === "Escape") {
      this.closeModal();
    }
  }

  // Actions

  showImage(image) {
    if (!image) {
      console.info("No image found");
      return;
    }
    this.addImgDataToModal(image);
    this.openModal();
  }

  addImgDataToModal(image) {
    this.modal.querySelector("img").src = image.src;
    this.modal.querySelector("h2").textContent = image.title;
    this.modal.querySelector("figure p").textContent =
      image.dataset.description;
    this.currentImg = image;
  }

  showNextImage() {
    this.showImage(this.currentImg.nextElementSibling);
  }

  showPrevImage() {}

  openModal() {
    if (this.modal.matches(".open")) {
      console.info("Modal already open!");
      return;
    }
    this.modal.classList.add("open");
    this.modal.addEventListener("click", this.handleClickOutside);
    window.addEventListener("keyup", this.handleKeyup);
  }

  closeModal() {
    this.modal.classList.remove("open");
    this.modal.removeEventListener("click", this.handleClickOutside);
    window.removeEventListener("keyup", this.handleKeyup);
  }
}

new Gallery(document.querySelector(".gallery1"));
new Gallery(document.querySelector(".gallery2"));
