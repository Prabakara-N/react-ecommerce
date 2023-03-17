import React from "react";
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
    </footer>
  );
};

export default Footer;
