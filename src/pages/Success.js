import React from "react";
import ImageLight from "../assets/img/login-findgreen.jpg";
import ImageDark from "../assets/img/Icon.png";
import Successform from "../components/Forms/Successform";

function Success() {
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
          <center>
            <img
              className="mb-4 justify-center h-16"
              src={ImageDark}
              alt="Office"
            />
            <h1 className="mb-4 text-2xl font-semibold ">
              Find Green account created successfully
            </h1>
          </center>
          <Successform />
        </div>
      </main>
    </div>
  );
}

export default Success;
