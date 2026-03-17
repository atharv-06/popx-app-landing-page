const Input = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="mb-4">
      <label className="text-sm text-purple-600">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-md px-3 py-2 mt-1 outline-none"
      />
    </div>
  );
};

export default Input;