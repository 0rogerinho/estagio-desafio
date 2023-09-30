import { useEffect, useState } from 'react';
import { HTTP } from './api';
import { AxiosError } from 'axios';
interface IFinancials {
  shopping: number;
  sales: number;
}

const getFinancials = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [financials, setFinancials] = useState<IFinancials | null>(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function response() {
      try {
        const finance = await HTTP.get('/financial');

        setFinancials(finance.data);
      } catch (error) {
        if (error instanceof AxiosError) throw new Error(error.message);
      }
    }
    response();
  }, []);

  return { financials };
};

export default getFinancials;
