import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./types";

const addProductoToCart = (state, product) => {
  let updatedCart = [...state.cart];
  let updatedItemIndex;

  updatedItemIndex = updatedCart.findIndex(item => item.id === product.id);

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const deleteProductFromCart = (state, id) => {
  let updatedCart = [...state.cart];
  let updatedItemIndex = updatedCart.findIndex(item => item.id === id);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return addProductoToCart(state, action.product);
    case REMOVE_PRODUCT_FROM_CART:
      return deleteProductFromCart(state, action.id);
    default:
      return state;
  }
};

export default shopReducer;
