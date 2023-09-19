/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { HTTP } from './api';

const getUser = () => {
  const [dataUser, setDataUser] = useState<string>();

  const token = localStorage.getItem('token');

  async function response() {
    try {
      const response = await HTTP.get('/user/id');
      const json = response.data.username;
      setDataUser(json);
    } catch (error) {
      console.log(error);
    }
  }

  if (token) response();

  return { dataUser };
};

export default getUser;
