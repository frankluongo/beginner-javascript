![](https://res.cloudinary.com/wesbos/image/upload/v1574876851/BJS/BJS-Social-Share.png)

# Beginner JavaScript

These are the starter files and solutions to the [Beginner JavaScript](https://BeginnerJavaScript.com) course

## Module 1: The Basics

### 03: Running & Loading JavaScript

- Adding `async` to a `script` tag will tell it to load asynchronously
- Adding `defer` to a `script` tag will tell it to wait until everything else is loaded first

### 05: Code Quality Tooling With Prettier and ESLint

- [Wes Bos's ESLint Config](https://github.com/wesbos/eslint-config-wesbos)

### 08: Types - Numbers

- `typeof` to get type
- Plus sign will concatenate strings so be careful
- `Math.` helper methods are useful. `round`, `floor`, `random` and `ceil` are most commonly used
- The Modulo `%` will give you the remainder of one number divided by another
- Don't store money in dollars and cents, just use cents and round it
- Integers are whole numbers and floats have decimal points

### 10: Null and Undefined

- `undefined` is when you try to access a variable that has been created but not set to any value
- `null` is when a variable has a value explicitly set to nothing

### 11: Booleans an Equality

- Almost always use triple equals
- Triple equals checks for the value and type of the things being compared
- Double equals only checks the value of the things being compared

## Module 2: Functions

### 12: Functions - Built-In

- `navigator.vibrate` can vibrate phones
- `scrollTo` can scroll to a section of a page

### 16: Debugging

- `console.count` will count how many times a function has run

## Module 3: The Tricky Bits

### 17: Scope

### 18: Hoisting

### 19: Closure

- Closure is accessing parent level scope from a child scope even after the parent function is dead
- You have to return the child function in order to access the parent functions variables

## Module 4: The DOM — Working With HTML & CSS

### 20: Intro to the DOM

- Navigator gives you information about the device
- Window gives you information about the browser
- Document is everything from the opening HTML tag to the closing one

### 21: Selecting Elements

- Use `document.querySelector` and `document.querySelectorAll`

### 22: Element Properties & Methods

- Use `console.dir` on an element to get the available methods and properties
- Use `.textContent` to get an element's text content
- Use `.insertAdjacentText` to add text to an element

### 23: Working with Classes

- JavaScript has ClassList methods, `.add`, `.remove`, `.toggle`, `.contains`

### 24: Built in and Custom Data Attributes

- Attributes refer to the additional info on an element
- Some are just getters like `.naturalWidth`

#### 24.1 How to get Natural Width to work

```js
window.addEventListener("load", function() {
  console.log(element.naturalWidth);
});
// OR
element.addEventListener("load", function() {
  console.log(element.naturalWidth);
});
```

- Use `data-` for custom attributes
- To get data on an object, use `.dataset`

### 25: Creating HTML

- Use `document.body` to append to the body of the page
- Use `.insertAdjacentElement` to add element next to another
- Also, `.cloneNode()` is good for cloning elements

### 26: HTML from Strings and XSS

- We can create elements using `document.createRange().createContextualFragment(markup)` and filling it in with text that will be converted to HTML that can be read by the browser

### 27: Traversing and Removing Nodes

- `.children` are only elements while `.childNodes` are elements and text
- The method you want to use is going to depend on whether you're starting with an element or a node and whether you're trying to interact with an element or a node

### 28: DOM CARDIO

## Module 5: Events

### 29: Event Listener

- use `{once: true}` on event listeners to call it and remove it in one shot

### 30: Targets, Bubbling, Propagation & Capture

- `event.currentTarget` is the thing that fired the event listener, so if you have a button with a nested element, the `currentTarget` will reference the button and not anything inside it
- `event.stopPropagation` will stop your event from bubbling up
- You can set events to listen at the capture or bubbling phase using the `{ capture: boolean }` option

### 31: Prevent Default & Form Events

- Use Preserve log to preserve things that happen in the console!!!

### 32: Accessibility Gotchas & Keyboard Codes

- Buttons and links should not be mixed up
- Use `role="button"` and `tabindex="0"` to ensure things are focusable
- `keycode.info` is the best website

## Module 6: Serious Practice Exercises

### 33: Etch-a-Sketch

### 34: Click Outside Modal

- Use `.closest` to find the thing you want the user to click

### 35: Scroll Events & Intersection Observer

- Here we use the Intersection Observer, which consists of instantiating the observer with a callback function and some options, telling it to observe something and then doing things with that action

### 36: Tabs

- This was done in a JS File in the repo

## Module 7: Logic & Flow Control

### 37: BEDMAS

- BEDMAS = Brackets, exponents, division, mulitiplication, addition, subtraction is the order of operations in JavaScript

### 38: If Statements, Function Returns, Truthy & Falsy

- Once an `if` statement finds a true condition, it stops
- Try to keep logic out of if statements
- Truthy values are things like empty or fill in strings

### 39: Coercion, Ternaries, and Conditional Abuse

- Coercision is forcing a non-boolean into a real boolean
- Double bang will convert a value into it's boolean value
- Don't forget the `&&` trick

Blockless If Statement

```javascript
if (thing) runFunction();
```

### 40: Case Switching & Animating a Turtle with CSS Variables

- Built a turtle!

### 41: Intervals & Timers

- When you use a timeout, javascript will keep going and come back to the timeout later

## Module 8: Data Types

### 42: Objects

- Always use trailing commas
- Use `Object.freeze(object)` to create an immutable object that locks down an object's properties
- You can use `delete` to remove a property on an object

### 43: Object Reference vs Values

- When you compare two objects, they usually will not be that same unless they are the exact same object
- When you create a variable that references an object (`object2 = object1`), upating the reference (`object2`) will update the original object (`object1`)
- If you pass an external object into a function, you can modify data that lives in that external object

How to properly copy and object

```javascript
// Shallow Copy
const objectCopy = { ...objectToCopy }
// Deep Copy -- requires Lodash
const deepObjectCopy = _.cloneDeep(objectToCopy)
```

### 44: Maps

- Maps are similar to objects
- A Map's order is set in stone
- A Map's key can be set to anything as well as the value
- Use a map if you need to maintain the order of the items
- Maps are for storing data
- Maps can't have methods
- If you need to send data, you have to put it in an object

```javascript
const map = new Map()
```

### 45: Arrays

How to properly add to an array

```javascript
  const updatedArray = [...array, newValue]
  // OR
  const updatedArray = [newValue, ...array]
```

### 46: Array Cardio - Static Methods

- `.slice` returns a portion of an array and is immutable
- `.splice` takes an item out of an array

### 47: Array Cardio - Instance Methods

- When you store an array with `.push` as a variable, it will return you the new length of the array for some reason

### 48: Array Cardio - Callback Methods & Function Generation

- `.sort` turns items into strings and then sorts them, to sort numbers you need to create a callback function

## Module 9: Gettin' Loopy

### 49: Looping & Iterating - Array .forEach

- Using `.forEach` you can get the item, index, and array as well as the `this`
- Doesn't return anything

### 50: Looping & Iterating - Mapping

- `.map` is for performing an action on data and returning it

### 51: Looping & Iterating - Filter, Find & Higher Order Functions

- Skipped

### 52: Looping & Iterating - Reduce

- The second argument in `.reduce` tells it where to start

### 53: Looping & Iterating - Reduce Exercise

### 54: Looping & Iterating - For, For in, Of & While Loops

#### For

- This is useful for looping through an array. Although `.forEach, .map and .reduce has replaced it` has pretty much replaced it.
- The only real use for it is when you have to increment by a specific number at a time

```javascript
for(let i = 0; i <= 10;i++>) {
  console.log(i);
}
```

#### For of

- Used for looping over iterables
- Useful for emojis, sequencing data
- Mostly useful for sequencing promises

```javascript
for(const letter of name) {
  console.log(letter);
}
```

#### For in

- Returns the keys of an object
- This does look into the prototype of an object

```javascript
for(const letter in name) {
  console.log(letter);
}
```

#### While & Do While Loop

- Not super useful

```javascript
let cool = true;
let i = 0;
while(cool === true) {
  console.log('You are cool);
  i++;
  if ( > 100) {
    cool = false;
  }
}

// Do While
do {

} while() {

}
```

## Module 10: Harder Practice Exercises

### 55: Face Detection & Censorship

- Finished!

### 56: Sarcastic Text Generator

- Resume at 14:13

### 57: Shopping Form with Custom Events, Delegation & LocalStorage

### 58: Building a Gallery Exercise

### 59: Building a Slider

## Module 11: Prototypes, `This`, `new` and Inheritance

### 60: The New Keyword

- The `new` keyword creates a new instance of an object

### 61: The This Keyword

- Remember that arrow functions bind `this` to the parent object

### 62: Prototype Refactor of The Gallery Exercise

### 63: Prototypes & Prototypal Inheritance

### 64: Prototype Refactor of The Slider Exercise

### 65: Bind, Call & Apply

## Module 12: Advanced Flow Control

### 66: The Event Loop & Callback Hell

### 67: Promises

### 68: Promises - Error Handling

### 69: Refactoring Callback Hell to Promise Land

### 70: Async Await

### 71: Async Await Error Handling

### 72: Async Await Prompt UI

### 73: Async Typer UI - 2 Options

## Module 13: AJAX & Fetching

### 74: Ajax & API's

### 75: CORS & Recipes

### 76: Dad Jokes

### 77: Currency Converter

## Module 14: ES Modules & Structuring Larger Apps

### 78: Modules

### 79: Currency modules Refactor

### 80: Dad Jokes Modules Refactor

### 81: Bundling & Building with Parcel

### 82: Using Open Source NPM Packages

### 83: Security

## Module 15: Final Round of Exercises

### 84: Web Speech Colours Game

### 85: Audio Visualization
