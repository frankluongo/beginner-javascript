(function () {
  //
  // Variables
  //
  const ITEMS_KEY = 'items';
  const ITEMS_UPDATED = 'itemsUpdated';
  const shoppingForm = document.querySelector('[data-ref="ShoppingForm"]');
  const list = document.querySelector('[data-ref="List"]');
  // State
  let items = [];

  //
  // Events
  //

  shoppingForm.addEventListener('submit', handleSubmit);
  list.addEventListener('itemsUpdated', displayItems);
  list.addEventListener('itemsUpdated', mirrorToLocalStorage);
  restoreFromLocalStorage();

  //
  // Handlers
  //

  function handleSubmit(event) {
    // Prevent Page Refresh
    event.preventDefault();
    // Create Item & Push To State
    pushItemToState(createItemObj(event.currentTarget.item.value))
    // Reset Form
    resetForm(event.target);
    // Fire Custom Event
    list.dispatchEvent(new CustomEvent(ITEMS_UPDATED));
  }

  //
  // Actions
  //

  function createItemObj(name) {
    return {
      name,
      id: Date.now(),
      complete: false
    }
  }

  function pushItemToState(item) {
    items.push(item);
  }

  function resetForm(form) {
    form.reset();
  }

  function displayItems() {
    const listHtml = items.map(item => (`
      <li class="shopping-item">
        <input type="checkbox" />
        <span class="itemName">${item.name}</span>
        <button aria-label="Remove ${item.name}" data-id="${item.id}" data-ref="DeleteButton">&times;</button>
      </li>
    `)).join('');
    list.innerHTML = listHtml;
  }

  function mirrorToLocalStorage() {
    window.localStorage.setItem(ITEMS_KEY, JSON.stringify(items))
  }

  function restoreFromLocalStorage() {
    const lsItems = getItems();
    if (lsItems.length > 0) {
      items.push(...lsItems);
      list.dispatchEvent(new CustomEvent(ITEMS_UPDATED))
    }
  }

  function getItems() {
    return JSON.parse(window.localStorage.getItem(ITEMS_KEY));
  }
})()
