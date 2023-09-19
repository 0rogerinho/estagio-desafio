import { Card, CardMedia } from '@mui/material';

type ICard = {
  img: string | undefined;
};

const CardPrimary = ({ img }: ICard) => {
  return (
    <Card sx={{ width: '500px', height: '400px', border: '1px solid #3333' }}>
      <CardMedia
        component="img"
        image={img}
        sx={{ objectFit: 'contain', maxHeight: '100%' }}
      />
    </Card>
  );
};

export default CardPrimary;
