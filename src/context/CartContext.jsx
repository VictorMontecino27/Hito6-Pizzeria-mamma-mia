import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const index = cart.findIndex((p) => p.id === pizza.id);

    if (index >= 0) {
      const newCart = structuredClone(cart);
      newCart[index].count += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const index = cart.findIndex((p) => p.id === id);

    if (index >= 0) {
      const newCart = structuredClone(cart);
      if (newCart[index].count > 1) {
        newCart[index].count -= 1;
        setCart(newCart);
      } else {
        const filteredCart = cart.filter((p) => p.id !== id);
        setCart(filteredCart);
      }
    }
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider; 