const $classTabContainer = document.querySelector('.tab-container');
const $classTabElements = document.querySelectorAll('.tab');
const $classViewElements = document.querySelectorAll('.view');
console.log($classTabElements);

$classTabContainer?.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;
  console.log($eventTarget);
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $classTabElements.length; i++) {
      if (($classTabElements[i] as HTMLDivElement) === $eventTarget) {
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
