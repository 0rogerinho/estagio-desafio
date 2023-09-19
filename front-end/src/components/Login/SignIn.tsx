import {
  DialogActions,
  Button,
  Box,
  FormControl,
  TextField,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { UseOpenSignUpContext } from '../../context/OpenSignUpContext';
import Api from '../../api/api';

const SignIn = () => {
  const { setOpenSignUp } = UseOpenSignUpContext();
  const { response, error } = Api();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    setOpenSignUp(true);
  }

  function handleClick() {
    console.log(email);
    console.log(password);

    response({ email, password });
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
    <Box>
      <DialogTitle
        fontSize="2rem"
        sx={{ fontWeight: 600, color: '#000', marginBottom: '-10px' }}
      >
        Welcome!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Sign in to continue buying/selling
        </DialogContentText>
      </DialogContent>

      <Box
        display="flex"
        flexDirection="column"
        gap={5}
        padding={'0px 20px 30px 20px'}
      >
        <FormControl fullWidth>
          <TextField
            fullWidth
            required
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
            required
            type="password"
            label="Password"
            error={!!error}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          {error && (
            <Typography
              position="absolute"
              top="55px"
              color="red"
              marginTop="3px"
            >
              Email or password invalid
            </Typography>
          )}
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
          onClick={handleClick}
          fullWidth
          variant="contained"
          color="primary"
          sx={{ margin: '0px 20px' }}
        >
          Sign In
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" marginX="20px">
        <DialogActions>
          <DialogContentText>Don't have an account?</DialogContentText>
          <Button
            onClick={handleSignUp}
            variant="text"
            sx={classSignUp}
            disableRipple
          >
            Sign up
          </Button>
        </DialogActions>
      </Box>
    </Box>
  );
};

export default SignIn;
