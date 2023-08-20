import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

// This is my feedback reducer. I have made it into a switch statement that will change the index for whatever actions type is targeted.
// Each compoenet, that has an input, will target a specific action type.
// The switch statement and the .slice method lets the value change for any index.
// There is also a action to return an empty array so the previous input will not show.
const feedback = (state = [], action) => {
  switch (action.type) {
    case "ADD_FEELING":
      return [action.payload, ...state.slice(1)];
    case "ADD_UNDERSTANDING":
      return [state[0], action.payload, ...state.slice(2)];
    case "ADD_SUPPORT":
      return [state[0], state[1], action.payload, ...state.slice(3)];
    case "ADD_COMMENTS":
      return [state[0], state[1], state[2], action.payload, ...state.slice(4)];
    case "REMOVE_FEEDBACK":
      return [];
    default:
      return state;
  }
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
