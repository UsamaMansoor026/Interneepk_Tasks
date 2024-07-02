import React from "react";

const SignUp = () => {
  return (
    <section className="container">
      <h3>Welcome to my Website</h3>

      <form>
        <input type="text" placeholder="Enter Your Name..." required />
        <input type="email" placeholder="Enter Your Email..." required />
        <input type="password" placeholder="Enter Your Password..." required />
        <input
          type="password"
          placeholder="Confirm Your Password..."
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
