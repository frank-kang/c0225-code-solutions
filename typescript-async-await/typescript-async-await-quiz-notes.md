# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  await is to tell the js engine to wait for async functions to complete. async tells the engine that it's a async function.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async await is easier to write and read.
- When do you use `async`?
  to indiate that the function is asyncronous
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  after async. do not use if you want function to happen immediately. nothing happens.
- How do you handle errors with `await`?
  catch block
- What do `try`, `catch` and `throw` do? When do you use them?
  runs the await code. they catch exceptions and throw errors. you use them with async and await.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  it returns Promise pending. the catch never runs.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await, it's easier to understand.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
