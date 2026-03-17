import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if both fields are filled
  const isValid = email && password;

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Simple validation
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      nav("/account");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="h-full px-6 lg:px-10 py-8">

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900">
        Signin to your PopX account
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 mt-3 mb-8 text-sm lg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* Form */}
      <div className="space-y-6">

        {/* Email */}
        <div className="relative">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C25FF]">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="
              w-full border border-gray-300 
              rounded-lg px-3 py-3 text-sm
              focus:border-[#6C25FF]
              focus:ring-1 focus:ring-[#6C25FF]
              outline-none transition
            "
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C25FF]">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="
              w-full border border-gray-300 
              rounded-lg px-3 py-3 text-sm
              focus:border-[#6C25FF]
              focus:ring-1 focus:ring-[#6C25FF]
              outline-none transition
            "
          />
        </div>

      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        disabled={!isValid}
        className={`
          w-full mt-10 py-3 rounded-lg text-white font-medium transition-all
          ${
            isValid
              ? "bg-[#6C25FF] hover:opacity-90"
              : "bg-[#CBCBCB] cursor-not-allowed"
          }
        `}
      >
        Login
      </button>

    </div>
  );
};

export default Login;