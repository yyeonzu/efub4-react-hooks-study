import React, { useRef, useEffect } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== 'number' || typeof delay !== 'number') {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      console.log(element.current); //참고용
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export const UseFadeInPractice = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div>
      <h1 {...fadeInH1}>useFadeIn</h1>
      <p {...fadeInP}>lorem ipsum l</p>
    </div>
  );
};
