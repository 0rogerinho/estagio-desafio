import { Route, Routes } from 'react-router-dom';
import Perfil from '../components/perfil/Perfil';
import Announce from '../components/announce/Announce';

const RoutePanel = () => {
  return (
    <Routes>
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/announce" element={<Announce />} />
    </Routes>
  );
};

export default RoutePanel;
