import 'babel-polyfill'

const wait = (ms = 0) => new Promise(res => setTimeout(res, ms))

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000)
  popup.remove();
  popup = null;
}

function ask(options) {
  return new Promise(async function (resolve, _) {
    // First we need to create a popup with the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML('afterbegin', `
      <fieldset>
        <label for="input">${options.title}</label>
        <input type="text" name="input" id="input">
        <button type="submit">Submit</button>
      </fieldset>
    `);
    // Check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.insertAdjacentElement('beforeend', skipButton);
      // listen for a click on the button
      skipButton.addEventListener('click', () => {
        resolve(null);
        destroyPopup(popup);
      }, { once: true });
    }
    // listen for the submit event on the inputs
    popup.addEventListener('submit', (e) => {
      e.preventDefault()
      resolve(popup.input.value);
      destroyPopup(popup);
    }, { once: true });

    // When someone does submit it, resolve the data that was in the input box

    // Insert Popup into DOM
    document.body.appendChild(popup);
    // Put very small timeout before adding the open class
    await wait(50)
    popup.classList.add('open');
  })
}

async function askQuestion(event) {
  const button = event.currentTarget;
  const answer = await ask({
    title: button.dataset.question,
    cancel: 'cancel' in button.dataset
  });
  console.log(answer)
}

const buttons = document.querySelectorAll('[data-question]');

buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

// We can't use promise.all because it will fire them all at once

// Promise.all(questions.map(ask)).then(data => { console.log(data); });

// We Use The For Of

// Utility Function

async function asyncMap(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(await callback(item));
  }
  return results;
}

async function askMany() {
  for (const question of questions) {
    const answer = await ask(question);
    console.log(answer);
  }
}

// askMany()

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();
