import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';

import OpenLogin from './context/OpenLoginContext';
import OpenSignUp from './context/OpenSignUpContext';
import Product from './context/Product';

import HomePage from './pages/HomePage';
import ProductRoutes from './Routes/ProductRoutes';
import ControlPanelRoutes from './Routes/ControlPanelRoutes';

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
            <Route path="/controlpanel/*" element={<ControlPanelRoutes />} />
          </Routes>
        </Product>
      </BrowserRouter>
    </>
  );
}

export default App;
