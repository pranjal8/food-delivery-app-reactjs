import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    // if (!cartItems[itemId]) {
    //   setCartItems((pre) => ({ ...pre, [itemId]: 1 }));
    // } else {
    //   setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
    // }

    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Increment only the specific item's quantity
    }));
  };
  const removeFromCart = (itemId) => {
    //setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));

    setCartItems((prev) => {
      if (!prev[itemId]) return prev; // No-op if item is not in the cart
      const updatedCart = { ...prev };
      if (updatedCart[itemId] === 1) {
        delete updatedCart[itemId]; // Remove item if the quantity is 1
      } else {
        updatedCart[itemId] -= 1; // Decrement the quantity
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product)=> product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
