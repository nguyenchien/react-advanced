import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  
  useEffect(()=>{
    console.log('useEffect render');
    window.addEventListener('resize', checkSize);
    
    return () => {
      console.log('cleanup function');
      window.removeEventListener('resize', checkSize);
    }
    // Or use 'Dependency List is: []'
  });
  
  console.log('component render');
  return (
    <>
      <h1>{size}</h1>
      <h2>PX</h2>
    </>
  );
};

export default UseEffectCleanup;
