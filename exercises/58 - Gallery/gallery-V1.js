function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }
  // Select Elements We Need
  const images = Array.from(gallery.querySelectorAll('img'))
  const modal = document.querySelector('[data-ref="Modal"]');
  const prevButton = modal.querySelector('[data-ref="Previous"]');
  const nextButton = modal.querySelector('[data-ref="Next"]');
  let currentImage;

  // Events

  images.forEach(image => {
    image.addEventListener('click', handleImageInteraction)
    image.addEventListener('keyup', event => {
      if (event.key === "Enter") {
        handleImageInteraction(event)
      }
    })
  });
  modal.addEventListener('click', handleClickOutside);

  // Handlers

  function handleImageInteraction({ currentTarget }) {
    addImageToModal(currentTarget);
    openModal();
  }

  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeyup(event) {
    if (event.key === 'Escape') {
      return closeModal();
    }
    if (event.key === 'ArrowRight') {
      return showNextImage();
    }
    if (event.key === 'ArrowLeft') {
      return showPreviousImage();
    }
  }

  // Actions
  function openModal() {
    if (modal.matches('.open')) {
      console.info('Modal already open');
      return;
    }
    modal.classList.add('open');
    window.addEventListener('keyup', handleKeyup);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPreviousImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    window.removeEventListener('keyup', handleKeyup);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPreviousImage);
  }

  function addImageToModal(el) {
    if (!el) {
      console.info('No image to show!');
      return;
    }
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
  }


  function showNextImage() {
    addImageToModal(
      currentImage.nextElementSibling || gallery.firstElementChild
    );
  }

  function showPreviousImage() {
    addImageToModal(
      currentImage.previousElementSibling || gallery.lastElementChild
    );
  }


}

const galleries = document.querySelectorAll('[data-ref="Gallery"]');
galleries.forEach(Gallery);
