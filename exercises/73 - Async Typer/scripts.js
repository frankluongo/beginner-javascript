import 'babel-polyfill'

//
// Utility Functions
//

const wait = (ms = 0) => new Promise(res => setTimeout(res, ms));
const getRandomBetween = (min = 20, max = 150, ranNum = Math.random()) => Math.floor(ranNum * (max - min));

//
// Elements
//

// document.querySelectorAll('[data-type]').forEach(draw);
document.querySelectorAll('[data-type]').forEach(recursiveDraw);

//
// Version 1: Async For Of Loop
//

async function draw(el) {
  const text = el.textContent;
  let soFar = '';
  for (const letter of text) {
    soFar += letter;
    el.textContent = soFar;
    const { typeMin, typeMax } = el.dataset;
    const waitTime = getRandomBetween(parseInt(typeMin), parseInt(typeMax));
    await wait(waitTime)
  }
}


//
// Version 2: Recursion
//

function recursiveDraw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;

  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    await wait(getRandomBetween(parseInt(typeMin), parseInt(typeMax)))
    // Exit Condition
    if (index <= text.length) {
      drawLetter();
    }
  }
  // When this function draw() runs, kick off drawLetter
  drawLetter();
}
