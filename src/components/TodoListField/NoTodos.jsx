import React from "react";
import { IoIosPartlySunny } from "react-icons/io";

const NoTodos = () => {
  return (
    <div className="w-full min-h-[95%] relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-1 text-center ">
        <IoIosPartlySunny className="m-auto text-9xl  text-zinc-200" />
        <h2 className="text-md">What a beautiful day</h2>
        <p className="text-md">you have nothing to do...</p>
      </div>
    </div>
  );
};

export default NoTodos;
