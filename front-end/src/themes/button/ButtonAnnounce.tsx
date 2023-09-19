import { Button } from '@mui/material';

const ButtonAnnounce = () => {
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
  return <Button sx={classButtonAnnounce}>Announce</Button>;
};

export default ButtonAnnounce;
