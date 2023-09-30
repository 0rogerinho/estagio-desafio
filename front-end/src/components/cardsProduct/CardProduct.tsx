import { Card, CardMedia } from '@mui/material';

type ICardProduct = {
  img: string | undefined;
};

const CardProduct = ({ img }: ICardProduct) => {
  return (
    <Card
      sx={{
        width: '150px',
        height: '150px',
        cursor: 'pointer',
        border: '1px solid #3333',
      }}
    >
      <CardMedia component="img" image={img} sx={{ objectFit: 'contain' }} />
    </Card>
  );
};

export default CardProduct;
