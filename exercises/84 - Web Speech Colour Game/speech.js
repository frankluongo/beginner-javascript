// import { handleResult } from './handlers';
// import { colorsByLength, isDark } from './colors';

// const colorsEl = document.querySelector('.colors');

// function displayColors(colors) {
//   return colors
//     .map(
//       color =>
//         `<span class="color ${color} ${
//           isDark(color) ? 'dark' : ''
//         }" style="background: ${color};">${color}</span>`
//     )
//     .join('');
// }

// window.SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;

// function start() {
//   // see if their browser supports this
//   if (!('SpeechRecognition' in window)) {
//     console.log('Sorry your browser does not support speech reco. ');
//     return;
//   }
//   // it does work
//   console.log('Starting...');
//   // make a new speech reco
//   const recognition = new SpeechRecognition();
//   recognition.continuous = true;
//   recognition.interimResults = true;
//   recognition.onresult = handleResult;
//   recognition.start();
// }

// start();
// colorsEl.innerHTML = displayColors(colorsByLength);

import { handleResult } from "./modules/handlers"

window.SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

function start() {
  if (!('SpeechRecognition' in window)) {
    console.info(`Sorry! Your browser doesn't support speech Recognition`);
    return
  }
  console.log('starting');
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();
