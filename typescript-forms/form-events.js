'use strict';
function handleFocus(event) {
  console.log('focus event was fired');
  const eventTarget = event.target;
  console.log('handleFocus eventTarget name: ', eventTarget.name);
}
const handleBlur = (event) => {
  console.log('blur event fired');
  const eventTarget = event.target;
  console.log('handleBlur eventTarget name: ', eventTarget.name);
};
function handleInput(event) {
  const eventTarget = event.target;
  console.log('handleInput eventTarget name:', eventTarget.name);
  console.log('handleInput eventTarget value:', eventTarget.value);
}
const $idName = document.querySelector('#user-name');
const $idUserEmail = document.querySelector('#user-email');
const $idUserMessage = document.querySelector('#user-message');
$idName?.addEventListener('focus', handleFocus);
$idName?.addEventListener('blur', handleBlur);
$idName?.addEventListener('input', handleInput);
$idUserEmail?.addEventListener('focus', handleFocus);
$idUserEmail?.addEventListener('blur', handleBlur);
$idUserEmail?.addEventListener('input', handleInput);
$idUserMessage?.addEventListener('focus', handleFocus);
$idUserMessage?.addEventListener('blur', handleBlur);
$idUserMessage?.addEventListener('input', handleInput);
