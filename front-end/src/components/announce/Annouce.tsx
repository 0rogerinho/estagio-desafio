import { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import postProduct from '../../api/postProduct';

interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
}

const Annouce = () => {
  const [img, setImg] = useState<any | null>('');
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
  });

  const { response } = postProduct();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });

    console.log(img);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    response(product);
    console.log(product);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '5px' }} color="black">
        Announce
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              type="text"
              name="title"
              value={product.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              name="img"
              type="file"
              value={img}
              onChange={({ target }) => {
                if (target.files && target.files[0]) {
                  setImg(target.files[0]);
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price"
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="stock"
              name="stock"
              type="number"
              value={product.stock}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Sell Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Annouce;
