import { Dialog } from '@mui/material';
import { UseOpenLoginContext } from '../../context/OpenLoginContext';
import { UseOpenSignUpContext } from '../../context/OpenSignUpContext';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Login = () => {
  const { openLogin, setOpenLogin } = UseOpenLoginContext();
  const { openSignUp } = UseOpenSignUpContext();

  const handleClose = () => {
    setOpenLogin(false);
  };

  return (
    <Dialog fullWidth maxWidth={'xs'} open={openLogin} onClose={handleClose}>
      {openSignUp ? <SignUp /> : <SignIn />}
    </Dialog>
  );
};

export default Login;
