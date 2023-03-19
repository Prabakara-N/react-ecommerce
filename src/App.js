import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

// import components
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<SignIn />} />
        </Routes>
        {/* <Sidebar />
        <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
