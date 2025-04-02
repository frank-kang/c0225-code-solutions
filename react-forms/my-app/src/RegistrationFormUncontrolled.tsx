import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  }

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Name: <input name="myInput" />
        </label>
        <label htmlFor="">
          Password: <input type="password" name="myPassword" />
        </label>
        <label htmlFor="">
          <button>Submit</button>
        </label>
      </form>
    </>
  );
}
