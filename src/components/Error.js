import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      Sorry! dead end.
      <br />
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Error;
