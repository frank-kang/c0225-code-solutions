import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const entries = new FormData(event.currentTarget);
    const data = Object.fromEntries(entries);
    console.log(data);
  }

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:{' '}
          <input type="text" name="username" placeholder="username" />
        </label>
        <label htmlFor="">
          Password:{' '}
          <input type="password" name="password" placeholder="password" />
        </label>
        <label htmlFor="">
          <button>Submit</button>
        </label>
      </form>
    </>
  );
}
