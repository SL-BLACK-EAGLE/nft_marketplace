const Button = ({ btnName, classStyles, handleClick }) => (
  <button
    type="button"
    className={`nft-gradient ${classStyles} minlg:text-lg minlg:px-8 px-6 py-2 font-poppins font-semibold text-sm text-white`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;
