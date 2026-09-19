### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Callbacks, Promises, and async/await
- What is a Promise?
An object that represent the eventual outcome success/failure of an asynchronous operation and can be pending, fulfilled, or rejected
- What are the differences between an async function and a regular function?
An async function always returns a Promise and allows the use of await inside it. Regular functions cannot use await unless its inside async function
- What is the difference between Node.js and Express.js?
Node.js is JavaScript runtime that allows JS to run outside of the browser and Express.js is a web framework that rund on Node.js and helps build servers, routes, middleware, and APIs
- What is the error-first callback pattern?
A Node.js convention where the first argument passed to a callback is an error and the second argument is the successful result
- What is middleware?
A function that runs during the request-response cycle in Epress and can read or change the request and response objects
- What does the `next` function do?
The next function passes control to the next middleware or route handler in the Express request and response cycle
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
The requests are made one at a time because each request waits for the previous request to finish. They don't depend on one another, so could be started at the same time using Promise.all which would be quicker and more efficient.
The variable names are specific and repetitive which would be easier to maintain if they were stored in an array and processed with map.
No error handling. If one requests fails, the function will reject without handling or explaining the error. 

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
