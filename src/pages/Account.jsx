const Account = () => {
  return (
    <div className="h-full bg-gray-50">

      {/* Header */}
      <div className="bg-white px-6 lg:px-10 py-4 border-b">
        <h2 className="text-lg font-medium text-gray-900">
          Account Settings
        </h2>
      </div>

      {/* Content */}
      <div className="px-6 lg:px-10 py-6">

        {/* Profile Section */}
        <div className="flex items-center gap-4">

          {/* Avatar */}
          <div className="relative">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />

            {/* Status Indicator */}
            <div className="
              absolute bottom-0 right-0 
              w-5 h-5 bg-[#6C25FF] 
              border-2 border-white 
              rounded-full
            "></div>
          </div>

          {/* User Info */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Marry Doe
            </h3>
            <p className="text-sm text-gray-500">
              Marry@gmail.com
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 mt-6 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam Voluptua.
        </p>

        {/* Divider */}
        <div className="border-t border-dashed my-6"></div>

      </div>
    </div>
  );
};

export default Account;