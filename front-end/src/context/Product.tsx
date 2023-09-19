/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useContext, useEffect } from 'react';

type IProducts = {
  _id: string;
  user_id: string;
  img: string;
  stock: number;
  state: boolean;
  __v: number;
  description: string;
  name: string;
  price: number;
};

type IProductContext = {
  product: IProducts | null; // Mudança: permitir que o estado seja nulo
  setProducts: React.Dispatch<React.SetStateAction<IProducts | null>>; // Alterado para corresponder a IProducts ou nulo
};

const ProductContext = createContext<IProductContext | null>(null);

export const UseProductContext = () => {
  const context = useContext(ProductContext);
  if (context === null) throw new Error('Context outside the provider');
  return context;
};

export const Product = ({ children }: React.PropsWithChildren) => {
  const [product, setProducts] = useState<IProducts | null>(null);

  const productString = localStorage.getItem('product');

  useEffect(() => {
    if (productString !== null) {
      const localStorageProduct = JSON.parse(productString);
      setProducts(localStorageProduct);
    }
  }, []);

  return (
    <ProductContext.Provider value={{ product, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Product;
