'use strict';
const $classClickButton = document.querySelector('.click-button');
if (!$classClickButton) throw new Error('$classClickButton does not exist');
function handleClick(event) {
  console.log('Button Clicked');
  console.log(event);
  console.log(event.target);
}
$classClickButton.addEventListener('click', handleClick);
const $classHoverButton = document.querySelector('.hover-button');
if (!$classHoverButton) throw new Error('$classHoverButton does not exist');
$classHoverButton.addEventListener('mouseover', (event) => {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
});
const $classDoubleClickButton = document.querySelector('.double-click-button');
if (!$classDoubleClickButton)
  throw new Error('$classDoubleClickButton does not exist');
$classDoubleClickButton.addEventListener('dblclick', (event) => {
  console.log('button double-click');
  console.log(event);
  console.log(event.target);
});
