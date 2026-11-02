import { useState} from "react";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler=function(e){
        e.preventDefault();
        console.log('form submitted');
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }
  
  return (
<div className="flex min-h-screen items-center justify-center px-4 py-8">
  <div className="w-full max-w-sm rounded-xl border border-purple-500/20 bg-[#151520] p-8 shadow-xl shadow-purple-950/20">

    <h2 className="mb-6 text-center text-2xl font-bold text-white">
      Create Account
    </h2>

    <form onSubmit={(e) => submitHandler(e)} className="space-y-4">

      {/* Full Name */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-gray-700 bg-[#20202e] px-4 py-2 text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-gray-700 bg-[#20202e] px-4 py-2 text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
        />
      </div>

      {/* Role */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-300">
          Select Role
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="w-full rounded-md border border-gray-700 bg-[#20202e] px-4 py-2 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
        >
          <option value="" disabled>Select your role</option>
          <option value="Employee">Employee</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      {/* Password */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-300">
          Password
        </label>
        <input
          type="password"
          placeholder="Create a password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border border-gray-700 bg-[#20202e] px-4 py-2 text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-300">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm your password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded-md border border-gray-700 bg-[#20202e] px-4 py-2 text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-purple-600 py-2 font-semibold text-white hover:bg-purple-700"
      >
        Sign Up
      </button>

    </form>

    <p className="mt-4 text-center text-sm text-gray-400">
      Already have an account?{" "}
      <a href="/login" className="font-medium text-purple-400 hover:text-purple-300">
        Login
      </a>
    </p>

  </div>
</div>
  );
};

export default Login;
