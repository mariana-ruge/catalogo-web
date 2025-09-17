import React from "react";

const ProductCard = ({ product, addToCart }) => {
  if (!product) return null;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button onClick={() => addToCart(product)}>Comprar</button>
    </div>
  );
};

export default ProductCard;
