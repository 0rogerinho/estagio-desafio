import { useState } from 'react';
import { HTTP } from './api';
import { AxiosError } from 'axios';

type IUpdateUsername = {
  username: string;
};

const patchUsername = () => {
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState<true | false>(false);

  async function response({ username }: IUpdateUsername) {
    try {
      await HTTP.patch('/user/update', { username });

      window.location.reload();
    } catch (error) {
      if (error instanceof AxiosError)
        throw new Error(error.response?.data.message);

      setError(true);
    }
  }

  return { response, error };
};

export default patchUsername;
