const Button = ({ text, onClick, variant = "primary" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 rounded-lg font-medium ${
        variant === "primary"
          ? "bg-purple-600 text-white"
          : "bg-purple-200 text-black"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;