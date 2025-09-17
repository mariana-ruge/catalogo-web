import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, addToCart }) => (
  <div className="product-grid">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductGrid;
