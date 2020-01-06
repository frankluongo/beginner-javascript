// Make a div
const myDiv = document.createElement("div");
// add a class of wrapper to it
myDiv.classList.add("wrapper");
// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myUl = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
myDiv.innerHTML = myUl;

// create an image
const myImg = document.createElement("img");
// set the source to an image
myImg.src = "https://picsum.photos/500";
// set the width to 250
myImg.height = 250;
myImg.width = 250;
// add a class of cute
myImg.classList.add("cute");
// add an alt of Cute Puppy
myImg.alt = "Cute Puppy";
// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const divWithTwoParagraphs = `
  <div>
    <p>
      paragraph 1
    </p>
    <p>
      paragraph 2
    </p>
  </div>
`;
// put this div before the unordered list from above

myDiv.insertAdjacentHTML("afterbegin", divWithTwoParagraphs);

// add a class to the second paragraph called warning
const secondParagraph = myDiv.querySelector("div p:nth-child(2)");
secondParagraph.classList.add("warning");
// remove the first paragraph
secondParagraph.previousElementSibling.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const playerCard = document.createElement("div");
  playerCard.classList.add("playerCard");
  playerCard.innerHTML = `
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button data-js="deleteBtn" type="button">&times; Delete Me</button>
  `;
  return playerCard;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsDiv = document.createElement("div");
cardsDiv.classList.add("cards");

// Have that function make 4 cards
const card1 = generatePlayerCard("Courtney", 23, `5"2'`);
const card2 = generatePlayerCard("Frank", 27, `5"4'`);
const card3 = generatePlayerCard("Paul", 29, `5"6'`);
const card4 = generatePlayerCard("Kristin", 29, `5"4'`);

// append those cards to the div
cardsDiv.appendChild(card1);
cardsDiv.appendChild(card2);
cardsDiv.appendChild(card3);
cardsDiv.appendChild(card4);

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement("beforebegin", cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('[data-js="deleteBtn"]');
// make out delete function
function deleteButton(event) {
  const card = event.target.closest(".playerCard");
  card.remove();
}
// loop over them and attach a listener
buttons.forEach(button => {
  button.addEventListener("click", deleteButton.bind(this));
});
