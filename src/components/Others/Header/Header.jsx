import { LogOut, UserCircle } from "lucide-react";

const Header = () => {
    const role='Admin'
  return (
    <header className="w-full px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Left side */}
          <h1 className="text-xl font-bold text-white">
            Task<span className="text-purple-500">Flow</span>
          </h1>
        {/* Right side */}
        <div className="flex items-center gap-5">

          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-white">
                Arnab
              {/* {userName} */}
            </p>

            <span className={`text-xs font-medium ${
              role === "Admin" ? "text-purple-400" : "text-green-400"
            }`}>
              {role}
            </span>
          </div>

          <UserCircle size={32} className="text-gray-300" />

          <button
            className="flex items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm text-gray-300 transition hover:border-red-500 hover:text-red-400"
          >
            <LogOut size={17} />
            Logout
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;