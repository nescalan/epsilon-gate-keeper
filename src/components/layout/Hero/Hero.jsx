import React from "react";
import "./Hero.styles.css";

function Hero() {
  const heroImg =
    "https://lobbyfix.com/wp-content/uploads/2021/08/app-devices.png";
  return (
    <React.Fragment>
      <section className="container">
        <div className="container-hero">
          <div className="left-col">
            <h1>Todo empieza en recepción</h1>
            <p>
              Olvida el libro de registros y las filas de espera en el control
              de visitas. Agiliza el registro de visitantes y mejora el control
              de accesos
            </p>
            <div className="hero-buttons">
              <a class="btn btn-1 th-btn btn-ghost-dark" href="#acerca">
                Descubre cómo
              </a>
              <button className="btn">PRUEBA GRATIS</button>
            </div>
            <span>Control de acceso y registro de visitantes</span>
          </div>
          <div className="right-col">
            <img src={heroImg} alt="Hero Visualization" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export { Hero };
