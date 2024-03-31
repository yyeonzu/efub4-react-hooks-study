import React, { useEffect } from 'react';

const useNetwork = (onChange) => {
  const [status, setStatus] = React.useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);
  return status;
};

export const UseNetworkPractice = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? 'We just went online' : 'We are offline');
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>UseNetwork</h1>
      <p>{online ? 'Online' : 'Offline'}</p>
    </div>
  );
};
