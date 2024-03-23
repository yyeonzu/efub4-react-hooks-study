import React, { useEffect, useState } from 'react';
import { useInput } from './useInput';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export const UseTitlePractice = () => {
  const title = useInput('');
  const titleUpdater = useTitle('');
  setTimeout(() => titleUpdater(title.value), 1000);
  return (
    <div>
      <h1>useTitle</h1>
      <input placeholder="Write title" {...title} />
    </div>
  );
};
