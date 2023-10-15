import React from 'react';

type ButtonPropsType = {
    btnName: string;
    classStyle: string;
}

const Button = ({ btnName, classStyle } : ButtonPropsType) => (
  <button
    type="button"
    className={`nft-gradient ${classStyle} minlg:text-lg minlg:px-8 px-6 py-2 font-poppins font-semibold text-sm text-white`}
  >
    {btnName}
  </button>
);
export default Button;
