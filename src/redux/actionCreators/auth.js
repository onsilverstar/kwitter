import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { LOGIN, LOGOUT } from "../actionTypes";

const url = domain + "/auth";

export const login = loginData => dispatch => {
  dispatch(LOGIN.START());

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(LOGIN.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(LOGIN.FAIL(err))));
};

export const logout = () => (dispatch, getState) => {
  dispatch(LOGOUT.START());

  const token = getState().auth.login.result.token;

  return fetch(url + "/logout", {
    method: "GET",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => dispatch(LOGOUT.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(LOGOUT.FAIL(err))));
};
