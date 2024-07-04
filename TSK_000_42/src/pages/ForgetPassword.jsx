import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const ForgetPassword = () => {
  /* States for Signup fields */
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Reset Password email sent successfully");
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="container">
      <div className="inner__container">
        <h3>Forget Your Password</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email..."
            required
          />
          <button type="submit">Forget Password</button>
        </form>
        <p>
          <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </section>
  );
};

export default ForgetPassword;
