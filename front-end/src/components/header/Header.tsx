import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
} from '@mui/material';
import ButtonAnnounce from '../../themes/button/ButtonAnnounce';
import SearchBar from '../../themes/searchBar/SearchBar';
import Login from '../Login/Login';
import { UseOpenLoginContext } from '../../context/OpenLoginContext';
import { UseOpenSignUpContext } from '../../context/OpenSignUpContext';
import getUser from '../../api/getUser';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { setOpenLogin } = UseOpenLoginContext();
  const { setOpenSignUp } = UseOpenSignUpContext();

  const navigate = useNavigate();

  const { dataUser } = getUser();

  function handleOpenLogin() {
    setOpenLogin(true);
    setOpenSignUp(false);
  }

  function handleClick() {
    navigate('/');
  }

  const classButtonLogin = {
    padding: '5px 20px',
    textTransform: 'none',
    transition: 'all 0.5s',
    fontSize: '16px',
    color: 'black',
    border: '1px solid black',
    borderRadius: '200px', //r
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'none',
    },
  };
  return (
    <AppBar
      variant="elevation"
      elevation={0}
      color="transparent"
      sx={{
        padding: '0px 100px',
        bgcolor: 'rgba(255, 255, 255, 0.5)',
        borderBottom: '1px solid  rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" gap={10}>
          <Typography
            fontSize={30}
            fontWeight={700}
            color="#FF0A0A"
            sx={{ cursor: 'pointer' }}
          >
            <span onClick={handleClick}>FOL</span>
          </Typography>

          <SearchBar />
        </Box>

        <Box sx={{ flexGrow: 5 }}></Box>

        {dataUser && (
          <Box display="flex">
            <Avatar>{dataUser?.substring(0, 1)}</Avatar>
            <Button variant="text" onClick={() => localStorage.clear}>
              logout
            </Button>
          </Box>
        )}

        <Box display="flex" height={40} gap={5}>
          {!dataUser && (
            <Button
              onClick={handleOpenLogin}
              variant="text"
              sx={classButtonLogin}
            >
              Sign in
            </Button>
          )}
          <ButtonAnnounce />
        </Box>
        <Login />
      </Toolbar>
    </AppBar>
  );
};
