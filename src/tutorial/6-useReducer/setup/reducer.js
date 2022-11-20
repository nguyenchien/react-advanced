export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added'
    }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((person)=> {
      return person.id !== action.payload
    })
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item removed'
    }
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please input value'
    }
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false
    }
  }
  throw new Error('do not matching action');
}