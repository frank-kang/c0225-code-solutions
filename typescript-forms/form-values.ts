interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface FormObject {
  name?: string;
  email?: string;
  message?: string;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;
$contactForm?.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements as FormElements;
  const formObject: FormObject = {};
  formObject.name = $formElements.name.value;
  formObject.email = $formElements.email.value;
  formObject.message = $formElements.message.value;

  console.log(formObject);
  $contactForm.reset();
});
