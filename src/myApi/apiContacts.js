import { authInstance } from './apiAuth';

export const getAllContacts = () => authInstance.get('/contacts');

export const addOneContact = contact => {
  return authInstance.post('/contacts', { ...contact });
};

export const deleteContact = id => authInstance.delete(`/contacts/${id}`);
