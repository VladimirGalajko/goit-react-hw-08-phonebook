import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';


import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from 'RestrictedRoute';
// import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Layout } from 'Layout';
import { getCurrentUser } from 'store/authSlise/authAsyncThunks';


const Home = lazy(() => import('pages/HomePage'));
const Register = lazy(() => import('pages/RegisterPages'));
const Login = lazy(() => import('pages/LoginPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));
// const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
