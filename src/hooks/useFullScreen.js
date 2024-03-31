import React, { useRef } from 'react';

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      if (callback && typeof callback === 'function') {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === 'function') {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

export const UseFullScreenPractice = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? 'We are full' : 'We are small');
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div>
      <div ref={element}>
        <img
          src="https://thediplomat.com/wp-content/uploads/2018/04/sizes/td-story-s-2/thediplomat-12340397434_e186b8001a_k.jpg"
          alt=""
        />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};
