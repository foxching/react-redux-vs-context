import React, { useContext } from "react";
import MainNavigation from "../components/MainNavigation";
import { ShopContext } from "../context/shopContext";
import "./Cart.css";

const CartPage = props => {
  const { carts, deleteProduct, cartItemCount } = useContext(ShopContext);
  return (
    <React.Fragment>
      <MainNavigation cartItemNumber={cartItemCount} />
      <main className="cart">
        {carts.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {carts.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button onClick={deleteProduct.bind(this, cartItem.id)}>
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};

export default CartPage;
