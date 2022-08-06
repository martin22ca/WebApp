import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide"></div>
      <div className="rightSide">
        <h1> Ingreso</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Usuario</label>
          <input name="name" placeholder="Inserte Usuario..." type="text" />
          <label htmlFor="email">Contraseña</label>
          <input name="email" placeholder="Inserte contraseña..." type="email" />
          <button type="submit"> Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
