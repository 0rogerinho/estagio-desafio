/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { HTTP } from './api';

interface Iproducts {
  _id: string;
  user_id: string;
  img: string;
  stock: number;
  state: boolean;
  __v: number;
  description: string;
  name: string;
  price: number;
}

const getProducts = () => {
  const [products, setProducts] = useState<Iproducts[] | null>(null);

  useEffect(() => {
    async function response() {
      const response = await HTTP.get('/products');
      const json: Iproducts[] = response.data;

      setProducts(json);
    }
    response();
  }, []);

  const productList = products ?? [];

  return { products: productList };
};

export default getProducts;
