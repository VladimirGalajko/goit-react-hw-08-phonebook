import { useDispatch } from 'react-redux';


import { Form, Label } from './LoginForm.styled';
import { logInUser } from 'store/authSlise/authAsyncThunks';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
        logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Email
        <input type="email" name="email" />
      </Label>
      <Label >
        Password
        <input type="password" name="password" />
      </Label>
      <button type="submit">Log In</button>
    </Form>
  );
};
