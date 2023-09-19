import { Box } from '@mui/material';
import CardPrimary from '../components/cardsProduct/CardPrimary';
import ProductCarousel from '../components/cardsProduct/ProductCarousel';
import ProductInformation from '../components/productInformation/ProductInformation';
import { UseProductContext } from '../context/Product';

const ProductPage = () => {
  const { product } = UseProductContext();

  return (
    <Box
      margin=" 130px 120px 0px 120px"
      display="flex"
      justifyContent="space-around"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <CardPrimary img={product?.img} />
        <ProductCarousel img={product?.img} />
      </Box>
      <Box width="500px">
        <ProductInformation />
      </Box>
    </Box>
  );
};

export default ProductPage;
