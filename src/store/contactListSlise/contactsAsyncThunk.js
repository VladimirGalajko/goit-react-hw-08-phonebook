import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 import * as api from '../../myApi/apiContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/getAll', 
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllContacts();
   
      return data;
    } catch ({ response }) {
      toast.error(`${response.data.message}`, {    
        autoClose: 2000
      });
      return thunkAPI.rejectWithValue(
        `Wrong... fetchContacts`
      );
    }
  }
);


const isDublicate = (contacts, { name, number }) => {
  const normalizedName = name.toLowerCase().trim();
  const normalizedNumber = number.trim();

  const dublicate = contacts.some(
    contact =>
      contact.name.toLowerCase().trim() === normalizedName ||
      contact.number.trim() === normalizedNumber
  );
  return dublicate;
};

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {   
    try {
      const { data: result } = await api.addOneContact(data);
      toast.success('Add contact', {    
        autoClose: 750
      });
      return result;
    } catch ({ response }) {
      toast.error(`${response.data.message}`, {    
        autoClose: 2000
      });
      return rejectWithValue(`Wrong...addContact `);
    }
  },
  
  {
    condition: (data, { getState }) => {
      const {
        contacts: { items },
      } = getState();

      if (isDublicate(items, data)) {        
        toast.error(`This contact is already in contacts`,{    
          autoClose: 750
        });
        return false; 
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      toast.success('Contact delete',{    
        autoClose: 750
      });
      return id;
    } catch ({ response }) {
      toast.error(`${response.data.message}`, {    
        autoClose: 2000
      });
      return rejectWithValue(`Wrong... deleteContact`);
    }
  }
);
