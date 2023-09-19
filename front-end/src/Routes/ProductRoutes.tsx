import { Routes, Route } from 'react-router-dom';
import { UseProductContext } from '../context/Product';
import ProductPage from '../pages/ProductPage';

const ProductRoutes = () => {
  const { product } = UseProductContext();
  return (
    <Routes>
      <Route
        path={`${product?.name.replace(/[^a-zA-Z0-9]/g, '')}`}
        element={<ProductPage />}
      ></Route>
    </Routes>
  );
};

export default ProductRoutes;
