import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { UserContext } from "../context/UserContext";

const Login = () => {
  /* States for Signup fields */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        alert("Login successful");
        setUser(true);
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
        <h3>Login to your account</h3>

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
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/">Sign Up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
