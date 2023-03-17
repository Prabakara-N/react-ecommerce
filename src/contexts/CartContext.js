import React, { useState, createContext, useEffect } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  // cart amt state
  const [itemAmount, setItemAmount] = useState(0);

  // total prize state
  const [total, setTotal] = useState(0);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // update total amount
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from the cart
  const removeFromCart = (id) => {
    const remainingCart = cart.filter((item) => item.id !== id);
    setCart(remainingCart);
  };

  // clear context
  const clearCart = () => {
    setCart([]);
  };

  // increase button
  const increaseAmount = (id) => {
    const cartItems = cart.find((item) => item.id === id);
    addToCart(cartItems, id);
  };

  // decrease button
  const decreaseAmount = (id) => {
    const cartItems = cart.find((item) => item.id === id);
    if (cartItems) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItems.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItems.amount <= 1) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
