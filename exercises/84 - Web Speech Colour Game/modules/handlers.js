import { isValidColor } from "./colors";

function logWords(results) {
  return results[results.length - 1][0].transcript;
}

export function handleResult(e) {
  const words = logWords(e.results);
  let color = words.toLowerCase();
  color.replace(/\s/g, '');
  if (!isValidColor(color)) return;
  const colorEl = document.querySelector(`[data-ref="${color}"]`);
  colorEl.classList.add('got');
  document.body.style.background = color;
}
