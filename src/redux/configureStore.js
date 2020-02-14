import { createBrowserHistory } from "history";
import createRootReducer from "./stateReducers";
import { configureStore as _configureStore } from "@reduxjs/toolkit";
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export default function configureStore(preloadedState) {
  const store = _configureStore({
    reducer: createRootReducer(history),
    preloadedState,
    devTools: process.env.NODE_ENV !== "production"
  });

  store.subscribe(() => {
    localStorage.setItem("login", JSON.stringify(store.getState().auth.login));
  });

  return store;
}
