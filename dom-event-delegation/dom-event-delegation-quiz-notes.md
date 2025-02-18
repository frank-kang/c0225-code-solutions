# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  the element that fired off the event
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  cause the event bubbles up.
- What DOM element property tells you what type of element it is?
  event.tagName
- What does the `element.closest()` method take as its argument and what does it return?
  it takes a parent element returns that element.
- How can you remove an element from the DOM?
  remeove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  as the event listener higher up the tree than the element being created.

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
