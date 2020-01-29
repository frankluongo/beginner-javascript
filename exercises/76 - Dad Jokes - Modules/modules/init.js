import { jokeButton } from "./elements.js";
import { handleClick } from "./handlers.js"

export default function init() {
  jokeButton.addEventListener("click", handleClick);
}
