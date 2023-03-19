import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-6">
      <div className="container mx-auto">
        <p className="text-white text-center">
          Copyright &copy; Ecommerce Shop 2023.All rights reserved
        </p>
      </div>
      <SocialMedia />
      <div className="text-center mt-5">
        <button className="bg-gray-600 text-white text-center px-3 py-2 rounded-lg font-medium md:px-5 md:py-3 md:rounded-xl md:text-xl md:font-semibold">
          <Link to="/signin">LogOut</Link>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
