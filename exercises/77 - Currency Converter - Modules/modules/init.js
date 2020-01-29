import { generateOptions } from "./utils.js";
import { fromSelect, toSelect } from "./elements.js"
import { handleInput } from "./handlers.js";
import currencies from "./currencies.js";

export function init() {
  // Variables
  const form = document.querySelector('[data-ref="currencyForm"]');
  const optionsHTML = generateOptions(currencies);
  // On Page Load Functions
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;
  // Listeners
  form.addEventListener('input', handleInput);
}
