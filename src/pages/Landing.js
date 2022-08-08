import React from "react";
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import "../styles/Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="topBar">
        <img src={Logo} alt="" />
        <h1> Colegio Del Espiritu Santo</h1>
      </div>
      <div className="main">
        <div className="headerContainer">
          <h1> Gestor asistencias </h1>
          <p> Ingrese con sus datos</p>
          <Link to="/login">
            <button> Log in </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
