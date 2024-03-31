import React, { useEffect, useState } from 'react';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = (event) => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return { state };
};

export const UseScrollPractice = () => {
  const { state } = useScroll();
  const x = state.x;
  const y = state.y;
  return (
    <div className="App" style={{ width: '30vh', height: '30vh' }}>
      <h1>useScroll</h1>
      <h2
        style={{
          position: 'fixed',
          color: y > 100 && x > 300 ? 'red' : 'blue',
        }}
      >
        Hi
      </h2>
    </div>
  );
};
