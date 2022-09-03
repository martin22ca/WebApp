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
          <div id="formContent">
            <div class="fadeIn first">
              <img src={Logo} id="icon" alt="User Icon" />
            </div>
            <form>
              <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
              <input type="text" id="password" class="fadeIn second" name="login" placeholder="password" />
              <input type="submit" class="fadeIn second" value="Log In" />
            </form>
            <div id="formFooter">
              <a class="underlineHover" href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
