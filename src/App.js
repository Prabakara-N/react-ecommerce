import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Error from "./pages/Error";

// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="signin/" element={<SignIn />} />
          <Route path="signup/" element={<SignUp />} />
          <Route path="/" element={<Home />}>
            <Route path="/product/:id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
