import React from "react";
import { FcAddImage } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="title">React Chat</h1>
        <p className="register">Register</p>
        <form>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <label htmlFor="file" className="file-label">
            <FcAddImage className="pp" />
            <span className="add-pp">Add a Profile Picture</span>
          </label>
          <input type="file" id="file" style={{ display: "none" }} /> <br />
          <button className="btn-signup">Sign Up</button>
        </form>
        <p className="do-you">
          Do you have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
