import React, { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    // 검증 과정
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(e.target.value);
    }
    if (willUpdate) {
      setValue(e.target.value);
    }
  };

  return { value, onChange };
};

export const UseInputPractice = () => {
  const validator = (value) => !value.includes('@') && value.length <= 10;
  const name = useInput('정연주', validator);

  return (
    <div>
      <h1>useInput</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
