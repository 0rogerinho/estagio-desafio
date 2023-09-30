import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';

import OpenLogin from './context/OpenLoginContext';
import OpenSignUp from './context/OpenSignUpContext';
import Product from './context/Product';
import HomePage from './pages/HomePage';
import ProductRoutes from './Routes/ProductRoutes';
import Perfil from './components/perfil/Perfil';
import Announce from './components/announce/Announce';
import ControlPanelPage from './pages/ControlPanelPage';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <OpenLogin>
          <OpenSignUp>
            <Header />
          </OpenSignUp>
        </OpenLogin>
        <Product>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/*" element={<ProductRoutes />} />
            <Route path="/controlpanel/*" element={<ControlPanelPage />}>
              <Route path="perfil" element={<Perfil />} />
              <Route path="announce" element={<Announce />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Product>
      </BrowserRouter>
    </>
  );
}

export default App;
