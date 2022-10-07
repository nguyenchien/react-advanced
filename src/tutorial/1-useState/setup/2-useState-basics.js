import React, { useState } from 'react';

const UseStateBasics = () => {
  console.log(useState('xxx'));
  const [title, setTitle] = useState('random title');
  const handlerTitle = () => {
    if (title === 'hello word') {
      setTitle('random title');
    } else {
      setTitle('hello word');
    }
  }
  return (
    <>
      <h2>{title}</h2>
      <button className='btn' onClick={handlerTitle}>change title</button>
    </>
  );
};

export default UseStateBasics;
