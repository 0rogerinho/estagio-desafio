import { useState } from 'react';
import { HTTP } from './api';
import { AxiosError } from 'axios';

type IUpdateUsername = {
  username: string;
};

const patchUsername = () => {
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState<IUpdateUsername | null>(null);

  async function response({ username }: IUpdateUsername) {
    try {
      const response = await HTTP.patch('/user/update', {
        username,
      });

      const json = response.data;

      setError(json);

      window.location.reload();
    } catch (error) {
      if (error instanceof AxiosError) setError(error.response?.data.message);
    }
  }

  return { response, error };
};

export default patchUsername;
