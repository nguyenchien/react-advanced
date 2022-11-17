import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime().toString();
    const person = {id, firstName, email}
    setPeople((peolple)=>{
      return [...peolple, person];
    });
    setFirstName('');
    setEmail('');
  }
  
  return <article>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">FirstName</label>
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          value={firstName} 
          onChange={(e)=>setFirstName(e.target.value)}
         />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <button type="submit" >add person</button>
    </form>
    
    {people.length > 0 && people.map((person)=>{
      const {id, firstName, email} = person
      return (
        <div className='item' key={id}>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      )
    })}
  </article>;
};

export default ControlledInputs;
