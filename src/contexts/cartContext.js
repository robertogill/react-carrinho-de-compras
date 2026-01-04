import React, { useEffect, useState, createContext } from "react";

import {
  update as updateCarrinho,
  remove as removeCarrinho,
  add as addCarrinho,
} from "../utils/cartUtil";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [length, setLength] = useState(0);
  const [total, setTotal] = useState("0");

  useEffect(() => {
    setLength(cart.reduce((cc, o) => (cc += o.length), 0));
    setTotal(
      cart.reduce((cc, o) => (cc += o.length * o.produto?.price), 0).toFixed(2)
    );
  }, [cart]);

  function add(carrinho) {
    if (!carrinho) return;

    setCart((prev) => addCarrinho(prev, carrinho));
  }

  function remove(carrinho) {
    if (!carrinho) return;

    setCart((prev) => removeCarrinho(prev, carrinho));
  }

  function update(carrinho) {
    if (!carrinho) return;

    setCart((prev) => updateCarrinho(prev, carrinho));
  }

  function removeAll() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, update, add, remove, removeAll, total, length }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
