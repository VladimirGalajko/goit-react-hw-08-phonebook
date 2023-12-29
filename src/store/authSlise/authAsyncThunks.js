import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLogin, userSignUp, userLogout, userCurrent } from 'myApi/apiAuth';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userSignUp(data);
      toast.success('Successfully registered!', {    
        autoClose: 750
      }); 
      return result;
    } catch ({ response }) {
        console.log('response', response)
        toast.error(`${response.data.name} status:${response.status }`, {    
            autoClose: 2000
          }); 
      
      return rejectWithValue(`Wrong...registerUser`);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userLogin(data);
      toast.success('Successfully logged!',{    
        autoClose: 750
      });  
      return result;
    } catch (error) {
        toast.error(`${error.message}`, {    
            autoClose: 2000
          }); 
      return rejectWithValue(`Wrong... logInUser`);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userLogout();
      toast.success('Successfully logout!',{    
        autoClose: 750
      });

      return data;
    } catch (error) {
        toast.error(`${error.message}`, {    
            autoClose: 2000
          }); 
      return rejectWithValue(`Wrong... logOutUser`);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const { data } = await userCurrent(token);
      return data;
    } catch ({ response }) {
        toast.error(`${response.data.message}`, {    
            autoClose: 2000
          });
      return rejectWithValue(`Wrong... getCurrentUser`);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();

      if (!token) {
        return false;
      }
    },
  }
);