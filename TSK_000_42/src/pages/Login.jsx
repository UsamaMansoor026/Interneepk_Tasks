import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  /* States for Signup fields */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        alert("Login successful");
        navigate("/profile");
      });
    } catch (err) {
      console.log(err);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <section className="container">
      <div className="inner__container">
        <h3>Welcome to my Website</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email..."
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password..."
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Don't have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
