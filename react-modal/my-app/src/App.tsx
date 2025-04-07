import './App.css';
import { useRef } from 'react';

function App() {
  const modal = useRef<HTMLDialogElement>(null);

  function handleOpenClick() {
    modal.current?.showModal();
  }
  function handleClose() {
    modal.current?.close();
  }
  function handleDelete() {
    window.alert();
    modal.current?.close();
  }

  return (
    <>
      <button onClick={handleOpenClick}>Delete Me!</button>
      <dialog ref={modal}>
        Do you really want to delete?
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </dialog>
    </>
  );
}

export default App;
