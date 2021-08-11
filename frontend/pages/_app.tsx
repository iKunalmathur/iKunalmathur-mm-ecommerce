import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext<Object[]>([]);

function MyApp({ Component, pageProps }: AppProps) {
  const [cartItems, setCartItems] = useState<Object[]>([]);

  const addItemToCart = (id: any) => {
    setCartItems([...cartItems, id]);
  };

  // console.log(cartItems);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.bundle")
      : null;
  }, []);
  return (
    <CartContext.Provider value={cartItems}>
      <Component
        {...pageProps}
        addItemToCart={addItemToCart}
        setCartItems={setCartItems}
      />
    </CartContext.Provider>
  );
}
export default MyApp;
