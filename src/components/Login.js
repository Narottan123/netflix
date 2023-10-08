import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>

      <form className="w-3/12  absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Adddress"
          className="p-2 my-2 w-full bg-gray-500"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full bg-gray-500"
        />
        <button className="p-4 my-4 bg-red-700 w-full bg-red-500">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
