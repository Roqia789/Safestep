import React from 'react';
import login from '../../assets/login.jpg';
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      backgroundImage : `url(${login})`
    }}>
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-2">
          Welcome Back <span role="img" aria-label="waving hand">👋</span>
        </h2>
        <p className="text-gray-600 mb-6">Please enter your details to login</p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-[#003366] hover:bg-[#002244] text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Sign in
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          Forget your password?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Reset password
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
