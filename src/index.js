import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

import { PersistGate } from "redux-persist/integration/react";

import { Elements } from "@stripe/react-stripe-js";

import { Provider } from "react-redux";
import { persistor, store } from "./store/store";

import App from "./App";
import { UserProvider } from "./contexts/user.context";

import { CartProvider } from "./contexts/cart.context";

import { stripePromise } from "./utils/stripe/stripe.utils";

// import { CategoriesProvider } from "./contexts/categories.context";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
        {/* <CartProvider> */}
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
        {/* </CartProvider> */}
        {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
