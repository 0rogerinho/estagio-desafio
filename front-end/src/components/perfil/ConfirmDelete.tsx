import { Box, Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import deleteAccount from '../../api/deleteAccount';

const ConfirmDelete = () => {
  const { response } = deleteAccount();

  const [password, setPassword] = useState('');

  function handleClick() {
    response({ password });
    console.log(password);
  }

  return (
    <Box padding="20px">
      <FormControl>
        <TextField
          value={password}
          label="password"
          type="text"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ background: 'red', marginTop: '20px' }}
        >
          Delete
        </Button>
      </FormControl>
    </Box>
  );
};

export default ConfirmDelete;
