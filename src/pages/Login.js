import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import Logo from "../assets/Logo.png"

function Login() {

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  return (
    <div class="wrapper fadeInDown">
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
  );
}

export default Login;
