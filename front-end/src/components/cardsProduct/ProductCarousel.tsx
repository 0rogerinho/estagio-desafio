import { Box } from '@mui/material';
import CardProduct from './CardProduct';

type IProductCarousel = {
  img: string | undefined;
};

const ProductCarousel = ({ img }: IProductCarousel) => {
  return (
    <Box display="flex" gap={2} marginTop={2}>
      <CardProduct img={img} />
      <CardProduct img={img} />
    </Box>
  );
};

export default ProductCarousel;
