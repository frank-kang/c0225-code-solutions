'use strict';
const $classTabContainer = document.querySelector('.tab-container');
const $classTabElements = document.querySelectorAll('.tab');
const $classViewElements = document.querySelectorAll('.view');
console.log($classTabElements);
$classTabContainer?.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  console.log($eventTarget);
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $classTabElements.length; i++) {
      if ($classTabElements[i] === $eventTarget) {
        $classTabElements[i].classList.toggle('active');
      } else {
        $classTabElements[i].className = 'tab';
      }
    }
  }
  const value = $eventTarget.dataset.view;
  if ($eventTarget.matches('.tab'))
    for (let j = 0; j < $classViewElements.length; j++) {
      if ($classViewElements[j].getAttribute('data-view') === value) {
        $classViewElements[j].classList.toggle('hidden');
      } else {
        $classViewElements[j].className = 'view hidden';
      }
    }
});
