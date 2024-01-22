import React from "react";

const Notfound = () => {
  return (
    <div className="min-w-screen min-h-screen bg-red-500 flex items-center justify-center">
      <div>
        <h1 className="text-white">404 Not Found</h1>
        <h2 className="text-white poppins text-3xl">
          This Page is not available...
        </h2>
        <p className="text-white underline">go back</p>
      </div>
    </div>
  );
};

export default Notfound;
