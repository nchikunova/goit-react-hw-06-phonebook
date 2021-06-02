import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactsFile.module.css';
import { connect } from 'react-redux';
import actions from '../redux/contacts-actions';


const ContactsFile = ({ contacts, onDeleteContact }) => (
  <ul className={s.contact_list}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        id={id}
        onDeleteContact={onDeleteContact}
        className={s.item_contact}
      />
    ))}
  </ul>
);

ContactsFile.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired),
  onDeleteContact: PropTypes.func.isRequired,
};

const filteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { contactsItems, filter } }) => ({
  contacts: filteredContacts(contactsItems, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFile);