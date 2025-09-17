import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CartSummary from './components/CartSummary';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Añadir producto al carrito
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Eliminar producto del carrito por índice
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Vaciar carrito
  const emptyCart = () => setCart([]);

  // Mostrar u ocultar carrito
  const toggleCart = () => setShowCart(!showCart);

  // Agendar compra
  const handleSchedule = () => {
    if (cart.length > 0) {
      alert("✅ Compra agendada. ¡Gracias por tu preferencia!");
      setCart([]);
      setShowCart(false);
    } else {
      alert("El carrito está vacío 😅");
    }
  };

  return (
    <div className="app">
      {/* Header con carrito */}
      <Header 
        cart={cart} 
        toggleCart={toggleCart} 
        handleSchedule={handleSchedule} 
      />

      {/* Contenido principal */}
      <main>
        <Home addToCart={addToCart} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Panel de carrito */}
      {showCart && (
        <CartSummary 
          cart={cart} 
          removeFromCart={removeFromCart} 
          emptyCart={emptyCart} 
          handleSchedule={handleSchedule} 
        />
      )}
    </div>
  );
}

export default App;

