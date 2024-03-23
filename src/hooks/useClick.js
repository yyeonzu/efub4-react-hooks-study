import React, { useRef, useEffect } from 'react';

// document.getElementId()와 동일한 효과

const useClick = (onClick) => {
  const ref = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') return;
    //  ref가 unmount 시점에 null이 되기 때문에 useEffect 내부에서 변수를 copy 해야한다.
    const element = ref.current;
    if (element) {
      element.addEventListener('click', onClick);
    }
    // componentWillUnmount
    return () => {
      if (element) {
        element.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);
  return ref;
};

export const UseClickPractice = () => {
  const sayHello = () => console.log('say hello');
  const span = useClick(sayHello);
  return (
    <div>
      <h1>useClick</h1>
      <span ref={span}>Say hello</span>
    </div>
  );
};
