import { useSelector } from 'react-redux';
import { selectIsLogin, selectIsRefreshing, selectToken, selectUser } from 'store/selectors';



export const useAuth = () => {
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLogin);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    token,
    isLoggedIn,
    user,
    isRefreshing,
  };
};