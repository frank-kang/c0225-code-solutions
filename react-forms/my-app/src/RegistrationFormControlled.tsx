import { FormEvent } from 'react';
import { useState } from 'react';

export function RegistrationFormControlled() {
  return (
    <>
      <h2>Controlled Form</h2>
      <form action="">
        <label htmlFor="">
          Username: <input type="text" />
        </label>
        <label htmlFor="">
          Password: <input type="password" />
        </label>
        <label htmlFor="">
          <button>Submit</button>
        </label>
      </form>
    </>
  );
}
