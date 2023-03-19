import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="login-box">
        <p>SignIn</p>
        <form>
          <div className="user-box">
            <input type="email" required name="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" required name="" />
            <label>Password</label>
          </div>
          <button className="btn-submit">Submit</button>
        </form>
        <p>
          Don't have an account? <Link> Register</Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
