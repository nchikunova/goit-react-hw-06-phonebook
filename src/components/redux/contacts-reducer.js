import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import { toast } from 'react-toastify';


const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsItems = createReducer([...initialState], {
  [actions.addContact]: (state, { payload }) => {
    const alreadyExists = state.some(contact => contact.name === payload.name);
    if (!alreadyExists) {
      return [...state, payload];
    } 
    toast.info(`${payload.name} is already in contacts`);
    return state;
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});


export default combineReducers({
  contactsItems,
  filter,
});