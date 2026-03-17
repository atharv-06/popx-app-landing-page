import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const nav = useNavigate();

  return (
    <div className="h-full flex items-end justify-center px-6 lg:px-10 py-10">
      
      {/* Content Card */}
      <div className="w-full max-w-md">
        
        {/* Title */}
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          Welcome to PopX
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-3 leading-relaxed text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Buttons */}
        <div className="mt-8 space-y-4">
          
          {/* Primary Button */}
          <button
            onClick={() => nav("/register")}
            className="
              w-full py-3 rounded-lg 
              bg-[#6C25FF] text-white font-medium 
              shadow-md hover:shadow-lg 
              hover:scale-[1.02] 
              transition-all duration-200
            "
          >
            Create Account
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => nav("/login")}
            className="
              w-full py-3 rounded-lg 
              bg-[#EDE6FF] text-black font-medium 
              hover:bg-purple-200 
              transition-all duration-200
            "
          >
            Already Registered? Login
          </button>

        </div>
      </div>
    </div>
  );
};

export default Welcome;