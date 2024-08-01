
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
// =================================================
import { useState, useEffect } from 'react'
import './App.css'
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const LOCAL_STORAGE_KEY = 'phoneBookContacts';

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'John Doe', number: '123-45-67' },
  { id: 'id-6', name: 'Jane Smith', number: '234-56-78' },
  { id: 'id-7', name: 'Emily Johnson', number: '345-67-89' },
  { id: 'id-8', name: 'Michael Brown', number: '456-78-90' },
  { id: 'id-9', name: 'Sarah Davis', number: '567-89-01' },
  { id: 'id-10', name: 'David Wilson', number: '678-90-12' },
  { id: 'id-11', name: 'Laura Martinez', number: '789-01-23' },
  { id: 'id-12', name: 'Chris Garcia', number: '890-12-34' },
  { id: 'id-13', name: 'Patricia Rodriguez', number: '901-23-45' },
  { id: 'id-14', name: 'Daniel Hernandez', number: '012-34-56' },
  { id: 'id-15', name: 'Linda Lewis', number: '123-45-67' },
];

const App = () => {

  // ========================== масив контактiв закодуваний в стані ==========================
   const [phoneBook, setPhoneBook] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : INITIAL_CONTACTS;
  });
  // ====================== загрузка даних из локального сховища ==========================
   useEffect(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedContacts) {
      setPhoneBook(JSON.parse(savedContacts));
    }
  }, []);
 //========================== збирiгання контактiв в локальне сховище ==============================
    useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(phoneBook));
  }, [phoneBook]);
  // ========================== налаштування для форми ==========================
    const validationSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .matches(/^[A-Za-zА-Яа-яЁё\s\-]+$/, 'Only letters are allowed')
    .min(3, 'Too Short! Min 3')
    .max(50, 'Too Long! Max 50'),
  number: Yup.string()
    .required('Required')
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
    .min(3, 'Too Short! Min 3')
    .max(15, 'Too Long! Max 15'),
    });
    
    const initialValues = {
        name: '',
        number: '',
    };

     const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    addContact(newContact);
    resetForm();
  };
// ========================== додавання нового контакту ==========================
  const addContact = (newContact) => {
          setPhoneBook(prevContacts => [...prevContacts, newContact]);
    };
  // ========================== видалення контакту ==========================
  const deleteContact = (contactId) => {
        setPhoneBook(prevPhoneBook => prevPhoneBook.filter(contact => contact.id !== contactId));
  };
  // ========================== пошук контакту ==========================
  const [filter, setFilter] = useState('');
  const filteredContacts = phoneBook.filter((contact) =>
         contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <>
      <div className='addContact'>
       <h1>Phonebook</h1>
      <ContactForm
                   validationSchema={validationSchema}
                   initialValues={initialValues}
                   handleSubmit={handleSubmit} />
      <SearchBox
                   value={filter}
          onFilter={setFilter} />
        </div>
      <ContactList
                   contacts={filteredContacts}
                   onDelete={deleteContact} />
    </>
  )
}

export default App
