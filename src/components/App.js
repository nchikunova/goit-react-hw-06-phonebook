import React from 'react';
import ContactsFile from './Contact';
import ContactForm from './ContactForm';
import Filter from './Filter';
import '../index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    return (
      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactsFile />
            <ToastContainer autoClose={3700} />
      </div>
    );
  }

export default App;

