import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';


const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <li className={s.item_contact}>
    <p className={s['item-text']}>{name}:</p>
    <p className={s['item-text']}>{number}</p>
    <button
      type="button"
      className={s.item_button}
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </li>
);

ContactItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
