import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from './reducer';

const Index = () => {
  const [name, setName] = useState('');
  
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
  }
  
  const [state, dispatch] = useReducer(reducer, defaultState);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {
        id: new Date().getTime().toString(),
        name
      };
      dispatch({
        type: 'ADD_ITEM',
        payload: newItem
      });
      setName('');
    } else {
      dispatch({
        type: 'NO_VALUE'
      });
    }
  }
  
  const closeModal = () => {
    dispatch({
      type: 'CLOSE_MODAL'
    });
  }
  
  const removeItem = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    });
  }
  
  
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person)=>{
        return (
          <div className="item" key={person.id}>
            {person.name}
            <button onClick={()=>{removeItem(person.id)}}>remove</button>
          </div>
        )
      })}
    </>
  );
};

export default Index;
