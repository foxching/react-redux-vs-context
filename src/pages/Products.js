import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import MainNavigation from "../components/MainNavigation";
import "./Products.css";

const ProductsPage = () => {
  const { products, addProduct, cartItemCount } = useContext(ShopContext);

  return (
    <React.Fragment>
      <MainNavigation cartItemNumber={cartItemCount} />
      <main className="products">
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button onClick={addProduct.bind(this, product)}>
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};

export default ProductsPage;
