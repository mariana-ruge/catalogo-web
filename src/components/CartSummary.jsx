import React from "react";

const CartSummary = ({ cart, removeFromCart, emptyCart, handleSchedule }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-panel">
      <h3>Carrito de Compras</h3>
      {cart.length === 0 && <p>El carrito está vacío</p>}
      {cart.length > 0 && (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button className="btn-remove" onClick={() => removeFromCart(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>

          {/* Botón Agendar Compra dentro del carrito */}
          <button className="btn-schedule-cart" onClick={handleSchedule}>
            Agendar Compra
          </button>

          <button className="btn-empty" onClick={emptyCart}>Vaciar Carrito</button>
        </>
      )}
    </div>
  );
};

export default CartSummary;
