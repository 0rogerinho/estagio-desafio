import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ButtonAnnounce = () => {
  const navigate = useNavigate();

  const classButtonAnnounce = {
    padding: '0 20px',
    textTransform: 'none',
    fontWeight: 600,
    background: '#FF9A03',
    color: 'white',
    border: 'none',
    borderRadius: 200,
    ':hover': { background: '#FF9A03' },
  };
  return (
    <Button
      sx={classButtonAnnounce}
      onClick={() => navigate('controlpanel/announce')}
    >
      Announce
    </Button>
  );
};

export default ButtonAnnounce;
