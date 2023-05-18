import React from "react";
import { Link } from "react-router-dom";
import ImageLight from "../assets/img/login-findgreen.jpg";
import CreateAccountForm from "../components/Forms/CreateAccountForm";

function CreateAccount() {
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
            Register
          </h1>
          <h3 className="text-sm">
            Already have an account ?{" "}
            <Link
              style={{ textColor: "#478B60" }}
              className="text-xs font-small text-red-400 dark:text-red-300 hover:underline "
              to="/auth/login"
            >
              {" "}
              Login
            </Link>
          </h3>
          <CreateAccountForm />
        </div>
      </main>
    </div>
  );
}

export default CreateAccount;
