import React from "react";
import ProductGrid from "../components/ProductGrid";

const products = [
  { id: 1, name: 'Bolso', description: 'Bolso de cuero elegante', price: 80, image: '/images/bolso.jpg' },
  { id: 2, name: 'Camiseta', description: 'Camiseta de algodón cómoda', price: 20, image: '/images/camiseta.jpg' },
  { id: 3, name: 'Chaqueta', description: 'Chaqueta moderna para invierno', price: 100, image: '/images/chaqueta.jpg' },
  { id: 4, name: 'Pantalón', description: 'Pantalón casual de tela suave', price: 50, image: '/images/pantalon.jpg' }
];


const Home = ({ addToCart }) => {
  const handleSchedule = () => {
    alert("Compra agendada");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Centro Comercial, venta de ropa</h1>
      </section>

      {/* Productos */}
      <section id="productos" className="max-w-7xl mx-auto text-center">
        <h2 className="section-title">Nuestros Productos</h2>
        <ProductGrid products={products} addToCart={addToCart} />
      </section>
    </>
  );
};

export default Home;
