const $classTaskList = document.querySelector('.task-list');

if (!$classTaskList) throw new Error('$classTaskList does not exist');
$classTaskList.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  console.log(eventTarget);
  console.log(eventTarget.tagName);

  if (eventTarget.tagName === 'BUTTON') {
    const et = eventTarget;
    const closest = et.closest('.task-list-item');
    console.log(closest);
    closest?.remove();
  }
});
