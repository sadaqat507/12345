import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import AuthContext from "./context/Authcontext.js";
import ContextProvider from "./context/Appcontext.js";
import OfferContextProvider from "./context/OfferContext.js";
import ProductsContextProvider from "./context/ProductContext.js";
import { CounterProvider } from "./context/CounterContext.js";
import { SearchProvider } from "./context/SearchProduct.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterProvider>
      <ProductsContextProvider>
        <ContextProvider>
          <OfferContextProvider>
            <AuthContext>
              <SearchProvider>
              <App />
              </SearchProvider>
            </AuthContext>
          </OfferContextProvider>
        </ContextProvider>
      </ProductsContextProvider>
    </CounterProvider>
  </React.StrictMode>
);
