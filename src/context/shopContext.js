import React, { useState, createContext, useReducer } from "react";
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./types";
import shopReducer from "./shopReducer";

export const ShopContext = createContext({});

const init = [
  { id: "p1", title: "Gaming Mouse", price: 29.99 },
  { id: "p2", title: "Harry Potter 3", price: 9.99 },
  { id: "p3", title: "Used plastic bottle", price: 0.99 },
  { id: "p4", title: "Half-dried plant", price: 2.99 }
];
const ShopContextProvider = props => {
  const [products] = useState(init);

  const [cart] = useState({ cart: [] });

  const [state, dispatch] = useReducer(shopReducer, cart);

  const addProduct = product => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        product
      });
    }, 700);
  };

  const deleteProduct = id => {
    setTimeout(() => {
      dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        id
      });
    });
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        carts: state.cart,
        addProduct,
        deleteProduct,
        cartItemCount: state.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
