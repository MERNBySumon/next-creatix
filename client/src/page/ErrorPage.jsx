import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>page is no found</p>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default ErrorPage;
