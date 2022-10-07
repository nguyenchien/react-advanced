import React, { useState } from 'react';

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: 'Chien',
    age: 35,
    message : 'random message'
  });
  const changeMessage = () => {
    setPeople(
      {...people, message: 'hello world'}
    );
  }
  return <>
    <h2>{people.name}</h2>
    <h2>{people.age}</h2>
    <h2>{people.message}</h2>
    <button className='btn' onClick={()=>changeMessage()}>change message</button>
  </>;
};

export default UseStateObject;
