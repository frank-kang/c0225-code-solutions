# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  a way to give access to "state".
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  function must start with "use" followed by an upper case. can only be called by react components and other hooks. must be called at top level of a coponent and in the same order.
- What is the purpose of state in React?
  to store data between re-renders.
- Why can't we just maintain state in a local variable?
  becasue they get reset after a function completes.
- What two actions happen when you call a `state setter` function?
  updates the value the state variable.
- When does the local `state variable` get updated with the new value?
  after the component rerenders.

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
