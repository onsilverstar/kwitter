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

const EDITUSER = createActions("edituser");

export const edituser = edituserData => (dispatch,getState) => {
  dispatch(EDITUSER.START());

  const token = getState().auth.login.result.token;
const userName = getState().auth.login.result.username
  return fetch(url + "/" + userName, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(edituserData)
  })
    .then(handleJsonResponse)
    .then(result => {
     return dispatch(EDITUSER.SUCCESS(result));
    })
    .catch(err => Promise.reject(dispatch(EDITUSER.FAIL(err))));
};

const DELETEUSER = createActions("deleteuser");

export const deleteuser = deleteuserData => (dispatch,getState) => {
    dispatch(DELETEUSER.START());
  
    const token = getState().auth.login.result.token;
  
    return fetch(url, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    });
  };

export const reducers = {
  register: createReducer(asyncInitialState, {
    ...asyncCases(REGISTER)
  }),
    edituser: createReducer(getInitStateFromStorage("edituser", asyncInitialState), {
      ...asyncCases(EDITUSER),
      [EDITUSER.SUCCESS.toString()]: (state, action) => asyncInitialState
    }),
    deleteuser: createReducer(asyncInitialState, {
      ...asyncCases(DELETEUSER)
    })
  };
