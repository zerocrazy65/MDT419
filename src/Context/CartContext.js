import React, { useState,useEffect } from "react";

import { createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if(localStorage.getItem("cart")){
        setCartCount(JSON.parse(localStorage.getItem("cart"))?.length)
}

  }, []);

  const context = {
    cartCount,
    setCartCount,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContext;
