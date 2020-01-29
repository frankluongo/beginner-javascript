import { loader, jokeHolder, jokeButtonSpan } from "./elements.js";
import { getRandomItemFromArray } from "./utils.js";
import { fetchJoke } from "./lib.js";
import { buttonText } from "./data.js";

export async function handleClick() {
  loader.classList.remove("hidden");
  const { joke } = await fetchJoke();
  loader.classList.add("hidden");
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = getRandomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}
