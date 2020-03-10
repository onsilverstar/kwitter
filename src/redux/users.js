import {
    domain,
    jsonHeaders,
    handleJsonResponse,
    getInitStateFromStorage,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer
  } from "./helpers";


const EDITUSER = createActions("edituser");

export const edituser = edituserData => dispatch => {
  dispatch(EDITUSER.START());

  const token = getState().auth.login.result.token;

  return fetch(domain + "/users", {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(edituserData)
  })
    .then(handleJsonResponse)
    .then(result => {
      dispatch(EDITUSER.SUCCESS(result));
    })
    .catch(err => Promise.reject(dispatch(EDITUSER.FAIL(err))));
};

const DELETEUSER = createActions("edituser");

export const deleteuser = deleteuserData => dispatch => {
    dispatch(DELETEUSER.START());
  
    const token = getState().auth.login.result.token;
  
    return fetch(domain + "/users", {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token, ...jsonHeaders },
      body: JSON.stringify(deleteuserData)
    })
      .then(handleJsonResponse)
      .then(result => {
        dispatch(DELETEUSER.SUCCESS(result));
      })
      .catch(err => Promise.reject(dispatch(DELETEUSER.FAIL(err))));
  };

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
    edituser: createReducer(getInitStateFromStorage("edituser", asyncInitialState), {
      ...asyncCases(EDITUSER),
      [EDITUSER.SUCCESS.toString()]: (state, action) => asyncInitialState
    }),
    deleteuser: createReducer(asyncInitialState, {
      ...asyncCases(DELETEUSER)
    }),
    register: createReducer(asyncInitialState, {
      ...asyncCases(REGISTER)
    })
  };
  