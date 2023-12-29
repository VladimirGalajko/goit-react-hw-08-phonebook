import { useDispatch } from 'react-redux';

import { Button, Div, P } from './UserMenu.styled';
import { logOutUser } from 'store/authSlise/authAsyncThunks';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  let checkUser = user?.name;
  if (checkUser) {
    checkUser = user.name;
  } else {
    checkUser = 'notUser';
  }
  return (
    <Div>
      <P>Welcome, {checkUser}</P>
      {/* <P>Welcome, `user.name`</P> */}
      <Button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </Button>
    </Div>
  );
};
