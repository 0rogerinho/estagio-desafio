import React, { createContext, useState, useContext } from 'react';

type IOpenSignUpContext = {
  openSignUp: boolean;
  setOpenSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const OpenSigUpContext = createContext<IOpenSignUpContext | null>(null);

export const UseOpenSignUpContext = () => {
  const context = useContext(OpenSigUpContext);
  if (context === null) throw new Error('Context outside the provider');
  return context;
};

export const OpenSignUp = ({ children }: React.PropsWithChildren) => {
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <OpenSigUpContext.Provider value={{ openSignUp, setOpenSignUp }}>
      {children}
    </OpenSigUpContext.Provider>
  );
};

export default OpenSignUp;
