import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

const App = () => {
  const [cart, setCart] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ]);

  const handleIncrement = (product) => {
    const updateProduct = cart[cart.indexOf(product)];
    updateProduct.value++;
    setCart([...cart]);
  };
  const handleDecrement = (product) => {
    const updateProduct = cart[cart.indexOf(product)];
    updateProduct.value--;
    setCart([...cart]);
  };

  return (
    <div className="App">
      <Navbar
        totalItems={cart.reduce((total, product) => total + product.value, 0)}
      />
      <ProductsGrid
        products={products}
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default App;