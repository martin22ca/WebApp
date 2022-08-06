import React from "react";
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="topBar">
        <img src={Logo} alt="" />
        <h1> Colegio Del Espiritu Santo</h1>
      </div>
      <div className="main">
        <div className="headerContainer">
          <h1> Gestor de asistencias </h1>
          <p> Ingrese con sus datos</p>
          <Link to="/contact">
            <button> Log in </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
