import React, { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users';

// second argument

const UseEffectFetchData = () => {
  
  const [users, setUsers] = useState([]);
  
  const getUsers = async() => {
    const respond =  await fetch(url);
    const users = await respond.json();
    setUsers(users);
  }
  
  useEffect(()=>{
    getUsers();
  }, []); 
  // Dependency List is verry very important.
  // Careful with infinite loop
  
  return <>
    <h2>Users List</h2>
    <ul className='users'>
      {users && users.length > 0 && users.map((user)=>{
        const {id, name, username, email} = user;
        return (
          <li key={id}>
            <div>
              <h4>{name}</h4>
              <a href='#'>{email}</a>
            </div>
          </li>
        )
      })}
    </ul>
  </>;
};

export default UseEffectFetchData;
