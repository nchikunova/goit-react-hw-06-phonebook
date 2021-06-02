import React, { Component } from 'react';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../redux/contacts-actions';


class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
    
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };


  render() {
    const { name, number } = this.state;
    return (
      <form className={s.item_form} onSubmit={this.handleSubmit}>
        <label className={s.label_data}>
          Name
          <input
            className={s.item_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Annie Copeland"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label_data}>
          Phone
          <input
            className={s.item_input}
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="111-11-11"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button
          className={s.btn_submit}
          type="submit"
          disabled={name === '' || number === ''}
        >
          Save contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(actions.addContact(name, number)),

});

export default connect(null, mapDispatchToProps)(ContactForm);
