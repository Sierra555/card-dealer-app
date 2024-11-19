const Button = ({ label, disabled, modifier }) => {
  return (
    <button
      disabled={disabled}
      className={`w-full p-2 rounded-full text-white bg-blue-900 hover:opacity-70 focus-visible:opacity-70 disabled:opacity-70 cursor-pointer transition ${modifier}`}>
      {label}
    </button>
  );
};

export default Button;
