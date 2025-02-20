function handleFocus(event: Event): void {
  console.log('focus event was fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('handleFocus eventTarget name: ', eventTarget.name);
}

const handleBlur = (event: Event): void => {
  console.log('blur event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('handleBlur eventTarget name: ', eventTarget.name);
};

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
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
