import { Box } from '@mui/material';
import ControlPanel from '../components/controlPanel/ControlPanel';
import { Outlet } from 'react-router-dom';

const ControlPanelPage = () => {
  return (
    <Box height="500px" margin="120px" border="1px solid black" display="flex">
      <ControlPanel />
      <Outlet />
    </Box>
  );
};

export default ControlPanelPage;
