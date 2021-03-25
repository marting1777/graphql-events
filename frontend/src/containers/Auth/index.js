import { useContext } from 'react';
import { AuthContainer } from './styles';
import Form from '../../components/Form';
import AuthContext from '../../context/auth-context';

function Auth() {
  return (
    <AuthContainer>
      <Form />
    </AuthContainer>
  );
}

export default Auth;