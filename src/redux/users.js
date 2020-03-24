import {
  domain,
  jsonHeaders,
  multiPartFormDataHeaders,
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

export const edituser = edituserData => (dispatch, getState) => {
  dispatch(EDITUSER.START());

  const token = getState().auth.login.result.token;
  const userName = getState().auth.login.result.username;
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

export const deleteuser = deleteuserData => (dispatch, getState) => {
  dispatch(DELETEUSER.START());

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  });
};

const DISPLAYPROFILE = createActions("displayprofile");

export const displayprofile = displayprofileData => (dispatch, getState) => {
  dispatch(DISPLAYPROFILE.START());
  const loggedInUsername = getState().auth.login.result.username;
  return fetch(url + "/" + loggedInUsername, {
    method: "GET",
    headers: jsonHeaders,
    body: JSON.stringify(displayprofileData)
  })
    .then(handleJsonResponse)
    .then(result => {
      dispatch(DISPLAYPROFILE.SUCCESS(result));
    })
    .catch(err => Promise.reject(dispatch(DISPLAYPROFILE.FAIL(err))));
};

const UPDATEIMAGE = createActions("updateimage");

export const updateimage = formElement => (dispatch, getState) => {
  console.log(formElement);
  dispatch(UPDATEIMAGE.START());
  const token = getState().auth.login.result.token;
  const loggedInUsername = getState().auth.login.result.username;
  return fetch(url + "/" + loggedInUsername + "/picture", {
    method: "PUT",
    headers: { Authorization: "Bearer " + token, ...multiPartFormDataHeaders },
    body: formElement
  })
    .then(handleJsonResponse)
    .then(result => {
      dispatch(UPDATEIMAGE.SUCCESS(result));
      dispatch(DISPLAYPROFILE.START());
    })
    .catch(err => Promise.reject(dispatch(UPDATEIMAGE.FAIL(err))));
};

export const reducers = {
  register: createReducer(asyncInitialState, {
    ...asyncCases(REGISTER)
  }),
  edituser: createReducer(
    getInitStateFromStorage("edituser", asyncInitialState),
    {
      ...asyncCases(EDITUSER),
      [EDITUSER.SUCCESS.toString()]: (state, action) => asyncInitialState
    }
  ),
  deleteuser: createReducer(asyncInitialState, {
    ...asyncCases(DELETEUSER)
  }),
  displayprofile: createReducer(asyncInitialState, {
    ...asyncCases(DISPLAYPROFILE)
  }),
  updateimage: createReducer(asyncInitialState, {
    ...asyncCases(UPDATEIMAGE)
  })
};
