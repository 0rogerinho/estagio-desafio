import axios, { AxiosError } from 'axios';
import { useState } from 'react';

type Login = {
  email: string;
  password: string;
};

const token = localStorage.getItem('token');

console.log(token);

// eslint-disable-next-line react-refresh/only-export-components
export const HTTP = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { Authorization: `Bearer ${token}` },
});

const Api = () => {
  const [error, setError] = useState<string>();

  async function response({ email, password }: Login) {
    try {
      const response = await HTTP.post('/auth/signin', { email, password });

      const json = await response.data;

      localStorage.setItem('token', json.access_token);

      window.location.reload();
    } catch (error) {
      if (error instanceof AxiosError) setError(error.response?.data.message);
    }
  }

  return { response, error };
};

export default Api;
