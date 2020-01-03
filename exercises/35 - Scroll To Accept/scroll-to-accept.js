console.log("IT WORKS!");
//
// The Wrong Way
//
/*x
const terms = document.querySelector(".terms-and-conditions");
terms.addEventListener("scroll", event => {
  console.log(event.currentTarget.scrollTop);
  console.log(event.currentTarget.scrollHeight);
  console.log(event);
});
*/

//
// Simple Scroll Watcher
//

// const watch = document.querySelector(".watch");
// const ob = new IntersectionObserver(obCallback);

// function obCallback(payload) {
//   console.log(payload);
// }

// ob.observe(watch);

const terms = document.querySelector(".terms-and-conditions");
const button = document.querySelector(".accept");

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
  } else {
    button.disabled = true;
  }
}

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: [0, 1]
});

ob.observe(terms.lastElementChild);
