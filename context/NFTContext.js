'use client';

import React from 'react';

export const NFTContext = React.createContext();
export const NFTProvider = ({ children }) => {
  const nftCurrency = 'MATIC';
  return (
    <NFTContext.Provider
      value={{
        nftCurrency,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
};
