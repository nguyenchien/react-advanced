import React, { useState, useRef, useEffect } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
//*** dynamic object keys => IMPORTANT ([name]: value)

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({firstName:'', email: ''});  
  const refContainer = useRef(null);
  
  useEffect(() => {
    refContainer.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let newPerSon = {};
    if (person.firstName && person.email) {
      newPerSon = {
        id: new Date().getTime().toString(),
        ...person
      }
      setPeople([...people, newPerSon]);
      setPerson({firstName:'', email: ''});
    } else {
      console.log('please input values');
    }
  };
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson ({...person, [name]: value});
  };
  
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
              ref={refContainer}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
