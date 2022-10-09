import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// *** Note in mind: Hook not in condition
const UseEffectBasics = () => {
  
  const [value, setValue] = useState(0);
  
  useEffect(()=> {
    console.log('useEffect render');
    if (value >= 1 ) {
      document.title = `New title ${value}`;
    }
  });
  
  console.log('component render');
  return <>
    <h2>{value}</h2>
    <button className='btn' onClick={()=>setValue(value + 1)}>click me</button>
  </>;
};

export default UseEffectBasics;
