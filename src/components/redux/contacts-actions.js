import { createAction } from '@reduxjs/toolkit';
import { v4 as uniqueId } from 'uuid';

const addContact = createAction('contacts/add', (name, number ) => {
  return {
    payload: {
      id: uniqueId(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts/delete');

const filterContacts = createAction('contacts/filter');

// eslint-disable-next-line import/no-anonymous-default-export
export default {addContact, deleteContact, filterContacts};