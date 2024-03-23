import React from 'react';

const useConfirm = (message = '', onConfirm, onCancel) => {
  if (typeof onConfirm !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

export const UseConfirmPractice = () => {
  const deleteWorld = () => console.log('Deleting the world...');
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm('Are you sure?', deleteWorld, abort);
  return (
    <div>
      <h1>useConfirm</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
