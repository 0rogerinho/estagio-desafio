/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { HTTP } from './api';
import { AxiosError } from 'axios';

type INewUser = {
  name: string;
  description: string;
  price: number;
  stock: number;
};

const postProduct = () => {
  const [error, setError] = useState<string>();

  async function response(product: INewUser) {
    try {
      const response = await HTTP.post('/products', product);

      const json = await response.data;

      console.log(json);

      window.location.reload();
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  }

  return { response, error };
};

export default postProduct;
