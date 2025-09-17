import React from "react";

const Header = ({ cart, toggleCart, handleSchedule }) => (
  <header className="header">
    <div className="header-left">
      <h1 className="logo">Centro Comercial</h1>
    </div>

    <nav className="header-right">
      <a href="#productos">Productos</a>
      <a 
        href="https://wa.me/57301123456?text=Hola%20%F0%9F%91%8B,%20estoy%20interesado%20en%20su%20cat%C3%A1logo%20%F0%9F%9B%8D%EF%B8%8F.%20Me%20encantar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20disponibles%20%F0%9F%92%96%20%C2%A1Gracias!%20%F0%9F%98%8A" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Contacto
      </a>

      <div className="cart-wrapper">

        {/* Icono del carrito */}
        <div className="cart-icon" onClick={toggleCart}>
          🛒
          <span className="cart-count">{cart.length}</span>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;

