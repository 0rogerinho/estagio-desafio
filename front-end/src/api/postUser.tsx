/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { HTTP } from './api';
import { AxiosError } from 'axios';

type INewUser = {
  username: string;
  email: string;
  password: string;
};

const postUser = () => {
  const [error, setError] = useState<string>();

  async function response({ username, email, password }: INewUser) {
    try {
      const response = await HTTP.post('/auth/signup', {
        username,
        email,
        password,
      });

      const json = await response.data;

      localStorage.setItem('token', json.access_token);

      window.location.reload();
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  }

  return { response, error };
};

export default postUser;
