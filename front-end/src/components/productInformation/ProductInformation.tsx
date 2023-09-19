import { Box, Typography, Button } from '@mui/material';
import { UseProductContext } from '../../context/Product';

const ProductInformation = () => {
  const { product } = UseProductContext();
  const price = product?.price.toString().replace(/\./, ',');
  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Typography variant="h4">{product?.name}</Typography>
      <Box>
        <Typography marginBottom={2} variant="h4" fontWeight={700}>
          R${price}
        </Typography>
        <Button
          variant="contained"
          sx={{ background: '#FF0A0A', width: '200px' }}
        >
          Buy
        </Button>
      </Box>
      <Typography variant="body1" fontSize="1.2rem" color="initial">
        {product?.description}
      </Typography>
    </Box>
  );
};

export default ProductInformation;
