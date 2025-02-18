'use strict';
const $classTaskList = document.querySelector('.task-list');
if (!$classTaskList) throw new Error('$classTaskList does not exist');
$classTaskList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log(eventTarget);
  console.log(eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const et = eventTarget;
    const closest = et.closest('.task-list-item');
    console.log(closest);
    closest?.remove();
  }
});
