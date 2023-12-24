import { authInstance } from "./apiAuth";



export const getAllContacts = () => authInstance.get('/contacts');

export const addOneContact = contact =>{

  console.log('myApy', contact)
   return authInstance.post('/contacts', { ...contact });
}

export const deleteContact = id => authInstance.delete(`/contacts/${id}`);

// export const editContact = contact => {
//   return authInstance.patch(`/contacts/${contact.id}`, {
//     name: contact.name,
//     number: contact.number,
//   });
// };

// import axios from 'axios';

// const contactsInstance = axios.create({
//   baseURL: 'https://657d6820853beeefdb9ab1f3.mockapi.io/contacts',
// });

// export const getAllContacts = () => contactsInstance.get('/');

// export const deleteContact = id => {
//   return contactsInstance.delete(`/${id}`);
// };

// export const addOneContact = data => {
//   return contactsInstance.post('/', data);
// };
