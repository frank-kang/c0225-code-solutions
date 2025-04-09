# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when the component first becomes visible.
- What is a React Effect?
  Function that runs after a component gets rendered.
- When should you use an Effect and when should you not use an Effect?
  Use an effect when you need to sync react with something external. Need to run code that needs to run after component renders.
  Don't need the previous use cases, don't use effect.
- When do Effects run?
  After initial render and when dependencies are updated.
- What function is used to declare an Effect?
  useEffect
- What are Effect dependencies and how do you declare them?
  they are variables and declared inside the array that is passed to useEffect.
- Why would you want to clean up from an Effect?
  you can have multiple effect handler so need to remove previous ones.
- How do you clean up from an Effect?
  return a function that clean up.
- When does the cleanup function run?
  before the component gets removed from the DOM.

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
