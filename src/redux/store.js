import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import RootReducer from "./RootReducer";

const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(RootReducer, applyMiddleware(...middleware));

export default store;
