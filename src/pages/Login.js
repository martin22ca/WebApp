import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  return (
    <div className="login">
      <div className="leftSide"></div>
      <div className="rightSide">
        <h1> Ingreso</h1>
        <h2>{/* errore */}</h2>
        <form id="Login-form" method="POST">
          <div className="wrapper">
            <label htmlFor="Username">Usuario</label>
            <input name="Username" placeholder="Inserte Usuario..." type="Username" />
          </div>
          <div className="wrapper">
            <label htmlFor="password">Contraseña</label>
            <input name="password" placeholder="Inserte contrasesña..." type="password" />
          </div>
          <div className="wrapper">
            <Link to={"/dashboard"}>
              <button type="submit"> Log In</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
