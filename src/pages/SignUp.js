import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// auth context
import { UserAuth } from "../contexts/AuthContext";
import SocialMedia from "../components/SocialMedia";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen  bg-slate-600">
        <div className="fixed w-full px-4 py-20 z-50 ">
          <div className="max-w-[450px] h-[600px]mx-auto bg-black/75 text-white rounded-md">
            <div className="max-w-[320px] mx-auto py-16">
              <div className="logo-login text-center ">
                <img
                  src="https://e7.pngegg.com/pngimages/946/113/png-clipart-graphic-design-logo-swag-text-art.png"
                  alt="logo"
                  className="w-[70px] h-[40px] mx-auto rounded-xl"
                />
              </div>
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-600 py-3 my-6 rounded font-semibold"
                >
                  Sign Up
                </button>
                <div className=" flex justify-between items-center font-medium mb-3 text-gray-400">
                  <p className="mr-2">
                    {" "}
                    <input type="checkbox" /> Remember me ?
                  </p>
                  <p>Need Help ?</p>
                </div>
                <p>
                  <span className="text-gray-500">
                    Already have an account ?
                  </span>
                  <Link to="/signin"> Sign In</Link>{" "}
                </p>
              </form>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;