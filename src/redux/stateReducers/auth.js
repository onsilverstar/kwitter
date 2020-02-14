import { LOGIN, LOGOUT } from "../actionTypes";
import { createReducer } from "@reduxjs/toolkit";
import {
  asyncCases,
  asyncInitialState,
  getInitStateFromStorage
} from "./helpers";

export const login = createReducer(
  getInitStateFromStorage("login", asyncInitialState),
  {
    ...asyncCases(LOGIN),
    [LOGOUT.SUCCESS]: (state, action) => asyncInitialState
  }
);

export const logout = createReducer(asyncInitialState, {
  ...asyncCases(LOGOUT)
});
