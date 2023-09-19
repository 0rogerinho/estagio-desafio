import {
  DialogActions,
  Button,
  Box,
  FormControl,
  TextField,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { useState } from 'react';
import { UseOpenSignUpContext } from '../../context/OpenSignUpContext';
import postUser from '../../api/postUser';

const SignUp = () => {
  const { setOpenSignUp } = UseOpenSignUpContext();
  const { response, error } = postUser();

  const [resultPassword, setResultPassowrd] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSignIn() {
    setOpenSignUp(false);
  }

  function handleNewUser() {
    if (password === confirmPassword) {
      response({ username, email, password });
    } else {
      setResultPassowrd(true);
    }
  }

  const classSignUp = {
    textTransform: 'none',
    transition: 'all 0.5s',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'none',
    },
  };

  return (
    <>
      <DialogTitle
        fontSize="2rem"
        sx={{ fontWeight: 600, color: '#000', marginBottom: '-10px' }}
      >
        Register now!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Sign Up to continue buying/selling
        </DialogContentText>
      </DialogContent>

      <Box
        display="flex"
        flexDirection="column"
        gap={5}
        padding={'0px 20px 20px 20px'}
      >
        <FormControl fullWidth>
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            fullWidth
            id="email"
            label="Email"
            error={!!error}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            fullWidth
            type="password"
            label="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            fullWidth
            type="password"
            label="Confirm password"
            error={resultPassword}
            value={confirmPassword}
            onChange={({ target }) => setConfirmPassword(target.value)}
          />
        </FormControl>
      </Box>
      <Box
        display={'flex'}
        width="100%"
        alignItems="center"
        maxWidth={300}
        margin="auto"
      >
        <Button
          onClick={handleNewUser}
          fullWidth
          variant="contained"
          color="primary"
          sx={{ margin: '0px 20px' }}
        >
          Sign up
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" marginX="20px">
        <DialogActions>
          <DialogContentText>Don't have an account?</DialogContentText>
          <Button
            onClick={handleSignIn}
            variant="text"
            sx={classSignUp}
            disableRipple
          >
            Sign in
          </Button>
        </DialogActions>
      </Box>
    </>
  );
};

export default SignUp;
