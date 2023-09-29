import { Box, List } from '@mui/material';
import ButtonPanel from './ButtonPanel';

const ControlPanel = () => {
  return (
    <Box maxWidth="200px" height="100%" borderRight="1px solid #727272">
      <List>
        <ButtonPanel text="perfil" icon="AccountBoxIcon" />
        <ButtonPanel text="announce" icon="LocalMallIcon" />
        <ButtonPanel text="Dashboard" icon="DashboardIcon" />
      </List>
    </Box>
  );
};

export default ControlPanel;
