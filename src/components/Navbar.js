import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="" />
        <div className="hiddenLinks">
          <Link to="/dashboard"> Home </Link>
          <Link to="/menu"> Cursos </Link>
          <Link to="/about"> Config </Link>
          <Link to="/contact"> Log out </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/dashboard"> Home </Link>
        <Link to="/menu"> Cursos </Link>
        <Link to="/about"> Config </Link>
        <Link to="/contact"> Log out </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
