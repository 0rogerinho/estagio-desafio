/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { HTTP } from './api';
import { AxiosError } from 'axios';

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
  const [load, setLoad] = useState(true);
  const [products, setProducts] = useState<Iproducts[] | null>(null);

  useEffect(() => {
    async function response() {
      try {
        const response = await HTTP.get('/products');
        const json: Iproducts[] = response.data;

        setProducts(json);
      } catch (error) {
        if (error instanceof AxiosError) throw new Error(error.message);
      } finally {
        setLoad(false);
      }
    }
    response();
  }, []);

  const productList = products ?? [];

  return { products: productList, load };
};

export default getProducts;
