'use strict';
const $contactForm = document.querySelector('#contact-form');
$contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const formObject = {};
  formObject.name = $formElements.name.value;
  formObject.email = $formElements.email.value;
  formObject.message = $formElements.message.value;
  console.log(formObject);
  $contactForm.reset();
});
