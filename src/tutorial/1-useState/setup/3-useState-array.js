import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeolple] = React.useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter(person => person.id !== id);
    setPeolple(newPeople);
  }
  return (
    <>
    {
      people.map(person => {
        const {id, name} = person;
        return (
          <div key={id} className='item'>
            {name}
            <button onClick={()=>removeItem(id)}>remove item</button>
          </div>
        )
      })
    }
    <button className='btn' onClick={()=>setPeolple([])}>clear all</button>
    </>
  )
};

export default UseStateArray;
