import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import authReducer from "./store/reducers/auth";
import paymentsReducer from "./store/reducers/payments";
import productsReducer from "./store/reducers/products";
import customersReducer from "./store/reducers/customers";
import ordersReducer from "./store/reducers/orders";
import userAccountReducer from "./store/reducers/userAccount";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  payments: paymentsReducer,
  products: productsReducer,
  customers: customersReducer,
  orders: ordersReducer,
  userAccount: userAccountReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
