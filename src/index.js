import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const feedback = (state = [], action) => {
  if (action.type === "ADD_FEEBACK") {
    return [...state, action.payload];
  }

  if (action.type === "ADD_FEEBACK") {
    const removePizza = state.filter((pizza) => pizza.id !== action.payload.id);
    return removePizza;
  }

  if (action.type === "REMOVE_FEEBACK") {
    return [];
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedback,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
