import { useDispatch, useSelector } from 'react-redux';
import { Li } from './ContactsList.styled';
import {
  deleteContact,
  fetchContacts,
} from 'store/contactListSlise/contactsAsyncThunk';
import { useEffect } from 'react';
import { selectVisibleContacts } from 'store/selectors';



const ContactList = () => {
  const showContacts = useSelector(selectVisibleContacts);
  const { isLoading, error } = useSelector(state => state.contacts);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const delContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
 
      {isLoading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      <ul>
        {showContacts.map(({ name, number, id }) => {
          return (
            <Li key={id}>
              <span>{name}: </span>
              <span>{number} </span>
              <button
                type="button"
                onClick={() => {
                  delContacts(id);
                }}
              >
                ❌
              </button>
            </Li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
