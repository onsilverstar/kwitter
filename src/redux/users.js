import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";

const url = domain + "/users";

const REGISTER = createActions("register");

export const register = registerData => dispatch => {
  dispatch(REGISTER.START());

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      dispatch(REGISTER.SUCCESS(result));
    })
    .catch(err => Promise.reject(dispatch(REGISTER.FAIL(err))));
};

export const reducers = {
  register: createReducer(asyncInitialState, {
    ...asyncCases(REGISTER)
  })
};
