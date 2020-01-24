import 'babel-polyfill';

const baseEndpoint = `http://www.recipepuppy.com/api`;
const corsProxy = `https://cors-anywhere.herokuapp.com/`;

async function fetchRecipes(query) {
  const res = await fetch(`${corsProxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data)
}

fetchRecipes('pizza');
