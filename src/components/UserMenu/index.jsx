import { useDispatch } from 'react-redux';


import { Div, P } from './UserMenu.styled';
import { logOutUser } from 'store/authSlise/authAsyncThunks';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const {     token,
    isLoggedIn,
    user,
    isRefreshing } = useAuth();
console.log('token', token)
console.log('isLoggedIn', isLoggedIn)
console.log('user', user)
console.log('isRefreshing', isRefreshing)
let checkUser = user?.name
if(checkUser){
    checkUser = user.name
}
else {
    checkUser = 'notUser'
}
  return (
    <Div>
      <P>Welcome, {checkUser}</P>
      {/* <P>Welcome, `user.name`</P> */}
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </Div>
  );
};
