'use client';

import React, { useEffect, useState } from 'react'; // eslint-disable-next-line import/no-unresolved
import { ethers } from 'ethers';
// eslint-disable-next-line import/no-unresolved
import { create as ipfsHttpClient } from 'ipfs-http-client';
import Web3Modal from 'web3modal';
// eslint-disable-next-line import/no-unresolved
import { MarketAddress, MarketAddressABI } from '@/context/constants';

const projectId = process.env.NEXT_PUBLIC_INFURA_API_KEY;

const projectSecret = process.env.NEXT_PUBLIC_INFURA_API_KEY_SECRET;

const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString(
  'base64',
)}`;

const client = ipfsHttpClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});

const fetchContract = (signerOrProvider) => new ethers.Contract(MarketAddress, MarketAddressABI, signerOrProvider);

export const NFTContext = React.createContext();
export const NFTProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const nftCurrency = 'ETH';
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

  useEffect(() => {
    checkIfWalletIsConnected().then((r) => r);
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install MetaMask');
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setCurrentAccount(accounts[0]);

    window.location.reload();
  };

  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });

      return `https://ipfs.infura.io/ipfs/${added.path}`;
    } catch (error) {
      console.log('Error uploading file to IPFS: ', error);
    }
  };

  const createNFT = async (formInput, fileUrl, router) => {
    const { name, description, price } = formInput;

    if (!name || !description || !price || !fileUrl) return alert('Please fill out all fields');

    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });

    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      await createSale(url, price);
      router.push('/');
    } catch (error) {
      console.log('Error uploading file to IPFS: ', error);
    }
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const price = ethers.utils.parseUnits(formInputPrice, 'ether');
    const contract = fetchContract(signer);
    const listingPrice = await contract.getListingPrice();

    const transaction = await contract.createToken(url, price, {
      value: listingPrice.toString(),
    });
    await transaction.wait();
  };

  return (
    <NFTContext.Provider
      value={{
        nftCurrency,
        connectWallet,
        currentAccount,
        uploadToIPFS,
        createNFT,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
};
