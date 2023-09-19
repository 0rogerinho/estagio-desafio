import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Dialog,
  TextField,
} from '@mui/material';
import getUser from '../../api/getUser';
import { useState } from 'react';
import ConfirmDelete from './ConfirmDelete';
import patchUsername from '../../api/patchUsername';

const Perfil = () => {
  const { dataUser } = getUser();
  const { response, error } = patchUsername();

  const [username, setUsername] = useState('');
  const [open, setOpen] = useState(false);

  function handleClick() {
    response({ username });
  }

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <Box display="flex" flexDirection="column" padding="20px" gap={3}>
      <FormControl>
        <FormLabel
          aria-label="username"
          sx={{ color: 'black', marginBottom: '5px' }}
        >
          Username
        </FormLabel>
        <TextField
          id="username"
          error={!!error}
          value={username}
          placeholder={dataUser}
          type="text"
          style={{
            height: '30px',
            borderRadius: '5px',
          }}
          onChange={({ target }) => setUsername(target.value)}
        />
      </FormControl>

      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          width: '30px',
          height: '25px',
          marginTop: '20px',
          textTransform: 'none',
        }}
      >
        Save
      </Button>

      <Box
        onClick={handleOpen}
        component="span"
        sx={{ color: '#FF0A0A', cursor: 'pointer' }}
      >
        Delete account
      </Box>
      <Dialog open={open} onClose={handleClose} sx={{ padding: '20px' }}>
        <ConfirmDelete />
      </Dialog>
    </Box>
  );
};

export default Perfil;
