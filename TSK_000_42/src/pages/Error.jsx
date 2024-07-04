import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "beige",
      }}
    >
      <div style={{ marginTop: "70px", textAlign: "center" }}>
        <h1 style={{ marginBlock: "14px" }}>User Not Authenticated</h1>
        <Link
          style={{
            textDecoration: "none",
            fontSize: "19px",
            fontWeight: "600",
          }}
          to="/login"
        >
          Login First
        </Link>
      </div>
    </div>
  );
};

export default Error;
