'use client';

import React, { useEffect, useState } from 'react';

export const NFTContext = React.createContext();
export const NFTProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return alert('Please install MetaMask');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      const account = accounts[0];
      setCurrentAccount(account);
    } else {
      console.log('No account found');
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install MetaMask');
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setCurrentAccount(accounts[0]);

    window.location.reload();
  };

  useEffect(() => {
    checkIfWalletIsConnected().then((r) => r);
  }, []);

  const nftCurrency = 'ETH';
  return (
    <NFTContext.Provider
      value={{
        nftCurrency,
        connectWallet,
        currentAccount,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
};
