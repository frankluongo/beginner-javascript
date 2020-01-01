const wes = document.querySelector(".wes");

wes.addEventListener("click", function(event) {
  const shouldChangePage = confirm("Do you want to leave this website?");
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener("submit", handleFormSubmit);

signupForm.name.addEventListener("keyup", handleKeyupOnFormElement);
signupForm.name.addEventListener("keydown", handleKeydownOnFormElement);

function handleFormSubmit(event) {
  const form = event.currentTarget;
  const name = form.name.value;
  if (name.includes("chad")) {
    alert("sorry bro");
    event.preventDefault();
  }
}

function handleKeyupOnFormElement(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

function handleKeydownOnFormElement(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

/*
Other Form Events
'keyup'
'keydown'
'focus'
'blur'
*/
