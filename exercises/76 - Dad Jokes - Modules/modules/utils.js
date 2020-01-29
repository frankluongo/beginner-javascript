export function getRandomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    return getRandomItemFromArray(arr, not);
  }
  return item;
}
