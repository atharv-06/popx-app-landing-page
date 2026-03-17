import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const nav = useNavigate();

  // (Optional) state for future use
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    // Optional: store data
    localStorage.setItem("user", JSON.stringify(form));

    // Navigate to account page
    nav("/account");
  };

  return (
    <div className="h-full px-6 lg:px-10 py-8 overflow-y-auto">

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Create your PopX account
      </h1>

      {/* Form */}
      <div className="space-y-5">

        {[
          { label: "Full Name*", key: "fullName" },
          { label: "Phone number*", key: "phone" },
          { label: "Email address*", key: "email" },
          { label: "Password*", key: "password", type: "password" },
          { label: "Company name", key: "company" },
        ].map((field, i) => (
          <div key={i} className="relative">

            {/* Floating Label */}
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C25FF]">
              {field.label}
            </label>

            {/* Input */}
            <input
              type={field.type || "text"}
              value={form[field.key]}
              onChange={(e) => handleChange(field.key, e.target.value)}
              placeholder="Marry Doe"
              className="
                w-full border border-gray-300 
                rounded-lg px-3 py-3 
                text-sm
                focus:border-[#6C25FF]
                focus:ring-1 focus:ring-[#6C25FF]
                outline-none transition
              "
            />
          </div>
        ))}

      </div>

      {/* Radio Section */}
      <div className="mt-6">
        <p className="text-sm text-gray-700 mb-3">
          Are you an Agency?
        </p>

        <div className="flex gap-6">
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="agency"
              value="yes"
              onChange={(e) => handleChange("agency", e.target.value)}
              className="accent-[#6C25FF] w-4 h-4"
            />
            <span className="text-sm">Yes</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="agency"
              value="no"
              onChange={(e) => handleChange("agency", e.target.value)}
              className="accent-[#6C25FF] w-4 h-4"
            />
            <span className="text-sm">No</span>
          </label>

        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="
          w-full mt-10 
          bg-[#6C25FF] text-white 
          py-3 rounded-lg font-medium 
          shadow-md hover:shadow-lg 
          hover:scale-[1.01]
          transition-all duration-200
        "
      >
        Create Account
      </button>

    </div>
  );
};

export default Register;