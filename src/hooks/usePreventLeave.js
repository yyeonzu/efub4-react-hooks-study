import React from 'react';

const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);

  return { enablePrevent, disablePrevent };
};

export const UsePreventLeavePractice = () => {
  const { enablePrevent: protect, disablePrevent: unprotect } =
    usePreventLeave();
  return (
    <div>
      <h1>usePreventLeave</h1>
      <button onClick={protect}>Protect</button>
      <button onClick={unprotect}>Unprotect</button>
    </div>
  );
};
