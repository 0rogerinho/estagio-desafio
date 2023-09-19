import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import getProducts from '../../api/getProducts';
import { UseProductContext } from '../../context/Product';
import { useNavigate } from 'react-router-dom';

type test = {
  title: string;
  img: string;
  price: number;
  indexProduct: number;
  stock: number;
};

const CardCarousel = ({ title, img, price, stock, indexProduct }: test) => {
  const { products } = getProducts();
  const { setProducts } = UseProductContext();

  const navigate = useNavigate();

  const titleLimit = title.slice(0, 30);

  function handleClick() {
    const productToSet = products.filter(
      (_product, index) => index === indexProduct,
    );
    localStorage.setItem('product', JSON.stringify(productToSet[0]));

    const productString = localStorage.getItem('product');

    if (productString !== null) {
      const product = JSON.parse(productString);

      setProducts(product);

      navigate(`/product/${product.name.replace(/[^a-zA-Z0-9]/g, '')}`);
    }
  }

  const classContent = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    textAlign: 'left',
  };

  const classCard = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #737373',
    width: '400px',
    height: '350px',
    overflow: 'visible',
    borderRadius: '10px',
  };

  return (
    <Card sx={classCard}>
      <CardMedia
        component="img"
        image={img}
        style={{
          objectFit: 'contain',
          maxHeight: 150,
          borderBottom: '1px solid #737373',
        }}
      />

      <CardContent sx={classContent}>
        <Typography component="div" variant="h6">
          {titleLimit}...
        </Typography>
        <Typography variant="h5" fontWeight={700} color="black">
          R$ {price?.toString().replace(/\./, ',')}
        </Typography>
        <Typography variant="body2" color="text.primary">
          (Only {stock} left in stock)
        </Typography>
      </CardContent>

      <Button
        onClick={handleClick}
        fullWidth
        variant="contained"
        sx={{
          height: '120px',
          background: '#FF0A0A',
          borderRadius: '0px 0px 4px 4px',
          textTransform: 'none',
          fontSize: '1.2rem',
          fontWeight: 700,
          borderTop: '1px solid #737373',
          ':hover': { background: '#AC0000' },
        }}
      >
        Buy
      </Button>
    </Card>
  );
};

export default CardCarousel;
