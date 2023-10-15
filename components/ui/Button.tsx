import React from 'react';

type ButtonPropsType = {
    btnName: string;
    classStyle: string;
    handleClick: () => void;
}

const Button = ({ btnName, classStyle, handleClick } : ButtonPropsType) => (
  <button
    type="button"
    className={`nft-gradient ${classStyle} minlg:text-lg minlg:px-8 px-6 py-2 font-poppins font-semibold text-sm text-white`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);
export default Button;
