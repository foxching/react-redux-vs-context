import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import ShopContextProvider from "./context/shopContext";
import "./App.css";

const App = () => {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
        </Switch>
      </BrowserRouter>
    </ShopContextProvider>
  );
};

export default App;
