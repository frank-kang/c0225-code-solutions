import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import 'tailwindcss';

export function Password() {
  const [password, setPassword] = useState('');
  let error: string = '';

  if (password.length === 0) {
    error = 'Password Required';
  } else if (password.length < 8) {
    error = 'Password Too Short';
  }

  return (
    <div className="flex w-full m-12">
      <label>
        <span className="text-gray-700">Password</span>
        <div className="relative w-80">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-1 pl-2 pr-8 border border-gray-200 rounded"
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            {error.length === 0 ? (
              <FaCheck color="green" />
            ) : (
              <FaTimes color="red" />
            )}
          </div>
        </div>
        <div className="p-1 text-red-700">{error}</div>
      </label>
    </div>
  );
}
