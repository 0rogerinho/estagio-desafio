import React, { createContext, useState, useContext } from 'react';

type IOpenLoginContext = {
  openLogin: boolean;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const OpenLoginContext = createContext<IOpenLoginContext | null>(null);

export const UseOpenLoginContext = () => {
  const context = useContext(OpenLoginContext);
  if (context === null) throw new Error('Context outside the provider');
  return context;
};

export const OpenLogin = ({ children }: React.PropsWithChildren) => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <OpenLoginContext.Provider value={{ openLogin, setOpenLogin }}>
      {children}
    </OpenLoginContext.Provider>
  );
};

export default OpenLogin;
