import { Box } from '@mui/material';
import ControlPanel from '../components/controlPanel/ControlPanel';
import Perfil from '../components/perfil/Perfil';

const ControlPanelPage = () => {
  return (
    <Box height="500px" margin="120px" border="1px solid black" display="flex">
      <ControlPanel />
      <Perfil />
    </Box>
  );
};

export default ControlPanelPage;
