import React from "react";
import { PrimaryBtn } from "../../buttons/PrimaryBtn";
import "./Navbar.styles.css";

function Navbar() {
  const logo = "https://lobbyfix.com/wp-content/uploads/2020/04/logo-dark.png";
  return (
    <div className="container">
      <header>
        <img src={logo} alt="company's logo" />
        <nav>
          <ul>
            <li>Como funciona</li>
            <li>Soluciones</li>
            <li>Precios</li>
            <li>Blog</li>
            <PrimaryBtn>Inicia sesión</PrimaryBtn>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
