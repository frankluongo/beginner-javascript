import "babel-polyfill";

const baseEndpoint = `http://www.recipepuppy.com/api`;
const corsProxy = `https://cors-anywhere.herokuapp.com/`;
const searchForm = document.querySelector("form.search");
const recipesGrid = document.querySelector('[data-ref="recipes"]');
//
// Actions
//
function displayRecipes(recipes) {
  const html = recipes.map(recipe => {
    return `
      <div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${recipe.thumbnail &&
          `<img src="${recipe.thumbnail} alt="${recipe.title}"/>`}
        <a href="${
          recipe.href
        }" target="_blank" rel="noopener noreferrer">View Recipe</a>
      </div>
    `;
  });
  recipesGrid.innerHTML = html.join("");
}
async function fetchRecipes(query) {
  const res = await fetch(`${corsProxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}
async function fetchAndDisplay(query) {
  searchForm.submit.disabled = true;
  const recipes = await fetchRecipes(query);
  searchForm.submit.disabled = false;
  displayRecipes(recipes.results);
}
//
// Handlers
//
async function handleSubmit(e) {
  e.preventDefault();
  fetchAndDisplay(e.currentTarget.query.value);
}

//
// Listeners
//
searchForm.addEventListener("submit", handleSubmit);
fetchAndDisplay("pizza");
