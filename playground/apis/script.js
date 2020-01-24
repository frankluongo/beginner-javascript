import 'babel-polyfill'

//
// Variables
//

// const endpoint = 'https://api.github.com/users/wesbos';
const baseEndpoint = 'https://api.github.com';
// const baseEndpoint = 'https://api.poop.com';
const usersEndpoint = `${baseEndpoint}/users`
const user = document.querySelector('[data-ref="user.paragraph"]');

//
// Promises
//


/*


// Handle Promise Responses

function handleError(error) {
  console.log(error)
}

function handleRes(res) {
  if (res.status === 200) {
    return res.json();
  }
}

function handleSuccess(data) {
  user.textContent = `${data.name} - ${data.blog}`;
}

// Fetch Data & Actions

user.textContent = 'Loading';

const wesPromise = fetch(endpoint)
wesPromise
  .then(handleRes)
  .then(handleSuccess)
  .catch(handleError);

*/

//
// Async Await
//

async function displayUser(username) {
  user.textContent = 'Loading';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  user.textContent = `${data.name} - ${data.blog}`;
}

displayUser('frankluongo').catch(error => {
  console.log(error);
  user.textContent = `Something went wrong! ${error}`
})

