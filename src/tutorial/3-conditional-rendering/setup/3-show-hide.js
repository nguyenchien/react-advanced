import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [isShow, setIsShow] = useState(true);
  
  return (
    <>
      <button className='btn' onClick={()=>setIsShow(!isShow)}>show/hide</button>
      {isShow && <Item />}
    </>
  );
  
};

const Item = () => {
  const [size, setsize] = useState(window.innerWidth);
  
  const checkSize = () => {
    setsize(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    
    // Clean function
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, []);
  
  return (
    <div style={{marginTop: '30px'}}>
      <h1>Window</h1>
      <h2>Size: {size}</h2>
    </div>
  )
}

export default ShowHide;
