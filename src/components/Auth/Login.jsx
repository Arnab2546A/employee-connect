import { useState} from "react";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler=function(e){
        e.preventDefault();
        console.log('form submitted');
        console.log(email);
        console.log(password);
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }
  
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl border border-purple-500/20 bg-[#151520] p-8 shadow-xl shadow-purple-950/20">

        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Login
        </h2>

        <form 
        onSubmit={(e)=>{submitHandler(e)}}
        className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="w-full rounded-md border border-gray-700 bg-[#20202e] px-4 py-2 text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="w-full rounded-md border border-gray-700 bg-[#20202e] px-4 py-2 text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-purple-600 py-2 font-semibold text-white hover:bg-purple-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-purple-400 hover:text-purple-300"
          >
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;
