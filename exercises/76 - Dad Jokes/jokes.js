import "babel-polyfill";
//
// Vars
//
const jokeButton = document.querySelector(".getJoke");
const jokeButtonSpan = jokeButton.querySelector(".jokeText");
const jokeHolder = document.querySelector(".joke p");
const endpointUrl = "https://icanhazdadjoke.com";
const loader = document.querySelector(".loader");

const buttonText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg dad.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one"
];
//
// Actions
//
async function fetchJoke() {
  const res = await fetch(endpointUrl, {
    headers: {
      Accept: "application/json"
    }
  });
  const data = await res.json();
  return data;
}
function getRandomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    return getRandomItemFromArray(arr, not);
  }
  return item;
}
//
// Handlers
//
async function handleClick() {
  loader.classList.remove("hidden");
  const { joke } = await fetchJoke();
  loader.classList.add("hidden");
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = getRandomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}
//
//
//
jokeButton.addEventListener("click", handleClick);
