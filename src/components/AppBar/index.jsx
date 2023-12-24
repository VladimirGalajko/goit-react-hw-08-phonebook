
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { Header } from './AppBar.styled';
import { useAuth } from 'hooks';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation/>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
