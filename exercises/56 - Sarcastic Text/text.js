(function () {
  const textarea = document.querySelector('[name="text"]');
  const result = document.querySelector('.result');
  const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

  const filters = {
    sarcastic(letter, index) {
      return index % 2 === 1 ? letter.toUpperCase() : letter.toLowerCase();
    },
    funky(letter, index) {
      return letter;
    },
    unable(letter, index) {
      return letter;
    }
  }


  // Fill In Text Initially
  updateResultText();
  // Observe Textarea for changes
  textarea.addEventListener('input', updateResultText);
  filterInputs.forEach(filter => { filter.addEventListener('change', updateResultText) });

  // Update Result Text
  function updateResultText() {
    result.textContent = filterText(textarea.value);
  }

  function filterText(text) {
    const textArray = Array.from(text).map(filters[filterInputs.find(input => input.checked).value]);
    return textArray.join('');
  }
})()
