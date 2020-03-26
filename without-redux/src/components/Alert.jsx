import React from "react";

const Alert = () => (
  <div
    className="bg-red-lighter border-l-8 border-red rounded-tr-lg rounded-br-lg text-red-dark p-4"
    role="alert"
  >
    <p className="font-bold">Holy smokes!</p>
    <p>Something seriously bad happened.</p>
  </div>
);

export default Alert;
