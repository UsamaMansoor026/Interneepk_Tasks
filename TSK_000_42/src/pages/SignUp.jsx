import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
  /* States for Signup fields */
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password).then(() => {
          alert("User Created Successfully");
        });
        addDataToDb();

        navigate("/login");
      } else {
        alert("Password and confirm password do not match");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addDataToDb = async () => {
    try {
      console.log(userName);
      const docRef = await addDoc(collection(db, "users"), {
        username: userName,
        email: email,
        password: password,
        confirmpassword: confirmPassword,
      });
      console.log("doc added with ID: " + docRef.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="container">
        <div className="inner__container">
          <h3>Welcome to my Website</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter Your UserName..."
              required
            />
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
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Your Password..."
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUp;
