'use strict';
const $classFullRow = document.querySelector('.full-row');
const $classBoxLight = document.querySelector('.box-light');
if (!$classFullRow) throw new Error('$classFullRow does not exist');
if (!$classBoxLight) throw new Error('$classBoxLight does not exist');
$classFullRow?.addEventListener('click', (event) => {
  const $event = event.target;
  if ($event.className !== 'box-light' && $event.className !== 'box-light on') {
    return;
  }
  $classBoxLight.classList.toggle('on');
  $classFullRow.classList.toggle('bg-on');
});
