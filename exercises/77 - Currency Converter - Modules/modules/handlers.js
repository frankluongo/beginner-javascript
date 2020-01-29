import { convert } from "./lib.js";
import { formatCurrency } from "./utils.js";
import { fromInput, fromSelect, toEl, toSelect } from "./elements.js"

export async function handleInput() {
  const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
