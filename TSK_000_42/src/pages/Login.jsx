import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  /* States for Signup fields */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
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
          Don't have an account? <Link to="/">Sign Up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
