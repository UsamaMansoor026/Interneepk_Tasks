import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Profile = () => {
  const currentUser = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        alert("Successfully Logged Out");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "70px",
        backgroundColor: "#a89bce",
      }}
    >
      <div>
        <h1>User Profile</h1>
        <p style={{ marginBlock: "20px" }}>
          You are currently logged with using{" "}
          <span style={{ color: "#fff", fontSize: "19px" }}>
            {currentUser.email}
          </span>
        </p>
        <Link to="/forget">Forget Password?</Link>
        <button style={{ marginTop: "10px" }} onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
