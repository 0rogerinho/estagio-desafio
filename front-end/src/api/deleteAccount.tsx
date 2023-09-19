import { useState } from 'react';
import { HTTP } from './api';

type IDeleteUser = {
  message: string;
};

type IResponse = {
  password: string;
};

const deleteAccount = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [deleteUser, setUserDeleteUser] = useState<IDeleteUser | null>(null);

  async function response({ password }: IResponse) {
    const response = await HTTP.delete('/user', {
      data: { password: password },
    });

    const json = response.data;

    setUserDeleteUser(json);

    window.location.reload();
  }
  return { deleteUser, response };
};

export default deleteAccount;
