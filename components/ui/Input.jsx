import React, { useContext } from 'react';
// eslint-disable-next-line import/no-unresolved
import { NFTContext } from '@/context/NFTContext';

const Input = ({ inputType, placeholder, title, handleClick }) => {
  const { nftCurrency } = useContext(NFTContext);
  return (
    <div className="mt-10 w-full">
      <p
        className="font-poppins dark:text-white text-nft-black-1
            font-semibold text-xl"
      >
        {title}
      </p>
      {inputType === 'number' ? (
        <div
          className="dark:bg-nft-black-1 bg-white border border-nft-gray-2 dark:border-nft-black-1
      rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3 flexBetween flex-row"
        >
          <input
            type="number"
            className="dark:bg-nft-black-1 bg-white outline-none flex w-full"
            placeholder={placeholder}
            onChange={handleClick}
          />
          <p
            className="font-poppins dark:text-white text-nft-black-1
            font-semibold text-xl"
          >
            {nftCurrency}
          </p>
        </div>
      ) : inputType === 'textarea' ? (
        <textarea
          rows={10}
          className="dark:bg-nft-black-1 bg-white border border-nft-gray-2 dark:border-nft-black-1
        rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3"
          placeholder={placeholder}
          onChange={handleClick}
        />
      ) : (
        <input
          className="dark:bg-nft-black-1 bg-white border border-nft-gray-2 dark:border-nft-black-1
      rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3"
          placeholder={placeholder}
          onChange={handleClick}
        />
      )}
    </div>
  );
};
export default Input;
