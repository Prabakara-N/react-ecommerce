import React, { useContext } from "react";

// import Link
import { Link } from "react-router-dom";

// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

// import components
import CartItem from "../components/CartItem";

// import sidebar contex
import { SidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return <div>Sidebar</div>;
};

export default Sidebar;
