import { Route, Routes } from 'react-router-dom';
import ControlPanelPage from '../pages/ControlPanelPage';

const ControlPanelRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ControlPanelPage />} />
    </Routes>
  );
};

export default ControlPanelRoutes;
