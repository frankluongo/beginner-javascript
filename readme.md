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

## TEMPORARY NOTES

### Section 25

- Use `document.body` to append to the body of the page
- Use `.insertAdjacentElement` to add element next to another
- Also, `.cloneNode()` is good for cloning elements

### Section 26

- We can create elements using `document.createRange().createContextualFragment(markup)` and filling it in with text that will be converted to HTML that can be read by the browser

### Section 27

- `.children` are only elements while `.childNodes` are elements and text
- The method you want to use is going to depend on whether you're starting with an element or a node and whether you're trying to interact with an element or a node

### Section 29: Event Listeners

### Section 30: The Event Object

- `event.currentTarget` is the thing that fired the event listener, so if you have a button with a nested element, the `currentTarget` will reference the button and not anything inside it
- `event.stopPropagation` will stop your event from bubbling up
- You can set events to listen at the capture or bubbling phase using the `{ capture: boolean }` option

### Section 31: Prevent Default / Forms

- Use Preserve log to preserve things that happen in the console!!!

### Section 32: Accessibility Gotchas & Keyboard Codes

- Buttons and links should not be mixed up
- Use `role="button"` and `tabindex="0"` to ensure things are focusable
- `keycode.info` is the best website

Resume 33 at 13:47
