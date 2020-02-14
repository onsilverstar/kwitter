import { createAction } from "@reduxjs/toolkit";

const createActions = actionName => ({
  START: createAction(actionName + "/start"),
  SUCCESS: createAction(actionName + "/success"),
  FAIL: createAction(actionName + "/fail")
});

export const LOGIN = createActions("login");
export const LOGOUT = createActions("logout");
