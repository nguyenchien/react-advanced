import React from 'react';

const ErrorExample = () => {
  let title = 'Random title';
  const handleChangeTitle = () => {
    title = 'Hello word!';
    console.log(title);
  }
  return (
    <>
      <h2>{title}</h2>
      <button className='btn' onClick={handleChangeTitle}>Change title</button>
    </>
  )
};

export default ErrorExample;
