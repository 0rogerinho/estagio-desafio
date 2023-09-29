/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { HTTP } from './api';
import { AxiosError } from 'axios';
import { createClient } from '@supabase/supabase-js';

type INewUser = {
  name: string;
  description: string;
  price: number;
  stock: number;
};

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
);

const postProduct = () => {
  const [error, setError] = useState<string>();

  async function response(
    { name, description, price, stock }: INewUser,
    file: File,
  ) {
    const uuid = self.crypto.randomUUID();
    try {
      const { data, error } = await supabase.storage
        .from('products')
        .upload(`${uuid}`, file);

      if (error) throw new Error(error.message);

      if (data) {
        const imgUrl = supabase.storage.from('products').getPublicUrl(data.path)
          .data.publicUrl;

        const response = await HTTP.post('/products', {
          name: name,
          description: description,
          img: imgUrl,
          price: price,
          stock: stock,
        });

        const json = await response.data;

        console.log(json);

        window.location.reload();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);

        throw new Error(error.response?.data.message);
      }
    }
  }

  return { response, error };
};

export default postProduct;
