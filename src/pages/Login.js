import React from "react";
import ImageLight from "../assets/img/login-findgreen.jpg";
import Loggedin from "../components/Forms/Loggedin";

function Login() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img
          aria-hidden="true"
          className="object-cover w-full h-screen dark:hidden"
          src={ImageLight}
          alt="Office"
        />
      </div>
      <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div className="w-full">
          <h1 className="mb-4 text-3xl font-semibold text-gray-700 dark:text-gray-200">
            Login
          </h1>
          <h3 className="text-sm">
            We will send you the 4 digits Verification code
          </h3>
          <Loggedin />
        </div>
      </main>
    </div>
  );
}
export default Login;
