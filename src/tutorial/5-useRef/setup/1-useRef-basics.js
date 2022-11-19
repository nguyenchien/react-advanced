import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const refDiv = useRef(null);
  
  useEffect(()=>{
    refContainer.current.focus();
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current);
    console.log(refDiv.current);
  }
  
  
  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
      <input type="text" ref={refContainer} />
      <button type="submit">submit</button>
    </form>
    <div ref={refDiv}>hello word</div>
    </>
  );
};

export default UseRefBasics;
