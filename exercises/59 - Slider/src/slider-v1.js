(function () {
  function Slider(slider) {
    if (!slider || !(slider instanceof Element)) {
      console.info('No Slider Passed!');
      return
    }
    // Get Your Variables & Elements
    let previous;
    let current;
    let next;
    const slides = slider.querySelector('[data-ref="Slider.slides"]');
    const prevButton = slider.querySelector('[data-ref="PrevButton"]');
    const nextButton = slider.querySelector('[data-ref="NextButton"]');
    // Event Listeners
    prevButton.addEventListener('click', () => { move('back') });
    nextButton.addEventListener('click', move);

    // Handlers

    // Actions
    function startSlider() {
      current = slider.querySelector('.current') || slides.firstElementChild;
      previous = getPrevElem(current);
      next = getNextElem(current);
    }

    function applyClasses() {
      current.classList.add('current');
      previous.classList.add('prev');
      next.classList.add('next');
    }
    function move(direction) {
      removeClasses();
      if (direction === 'back') {
        // Make a new array of the new values and destructure them
        [previous, current, next] = [getPrevElem(previous), previous, current];
      } else {
        [previous, current, next] = [current, next, getNextElem(next)];
      }
      applyClasses();
    }
    function removeClasses() {
      const classesToRemove = ['prev', 'current', 'next'];
      previous.classList.remove(...classesToRemove);
      current.classList.remove(...classesToRemove);
      next.classList.remove(...classesToRemove);
    }
    function getPrevElem(elem) {
      return elem.previousElementSibling || slides.lastElementChild;
    }
    function getNextElem(elem) {
      return elem.nextElementSibling || slides.firstElementChild;
    }
    // Functions That Run Immediately
    startSlider()
    applyClasses()
  }

  document.querySelectorAll('[data-ref="Slider"]').forEach(slider => { Slider(slider) });
})();
