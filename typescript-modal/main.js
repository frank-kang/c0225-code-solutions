'use strict';
const $classOpenModal = document.querySelector('.open-modal');
const $classDismissModal = document.querySelector('.dismiss-modal');
const $tagElement = document.querySelector('dialog');
if (!$classOpenModal || !$classDismissModal || !$tagElement)
  throw new Error('One or more elements do not exist');
$classOpenModal.addEventListener('click', () => {
  $tagElement.showModal();
});
$classDismissModal.addEventListener('click', () => {
  $tagElement.close();
});
