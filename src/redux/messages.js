import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";

const url = domain + "/messages";

const NEWMESSAGEFEED = createActions("newmessagefeed");

export const newmessagefeed = newmessagefeedData => dispatch => {
  dispatch(NEWMESSAGEFEED.START());
  return fetch(url + "?limit=100&offset=0", {
    method: "GET",
    headers: jsonHeaders,
    body: JSON.stringify(newmessagefeedData)
  })
    .then(handleJsonResponse)
    .then(result => {
      dispatch(NEWMESSAGEFEED.SUCCESS(result));
    })
    .catch(err => Promise.reject(dispatch(NEWMESSAGEFEED.FAIL(err))));
};

const MYMESSAGEFEED = createActions("mymessagefeed");

export const mymessagefeed = mymessagefeedData => (dispatch, getState) => {
  dispatch(MYMESSAGEFEED.START());
  const loggedInUsername = getState().auth.login.result.username; //"mb123"; //state.auth.login.result.username
  return fetch(url + "?limit=100&offset=0&username=" + loggedInUsername, {
    method: "GET",
    headers: jsonHeaders,
    body: JSON.stringify(mymessagefeedData)
  })
    .then(handleJsonResponse)
    .then(result => {
      dispatch(MYMESSAGEFEED.SUCCESS(result));
    })
    .catch(err => Promise.reject(dispatch(MYMESSAGEFEED.FAIL(err))));
};

const DELETEMESSAGE = createActions("deletemessage");
export const deletemessage = messageId => (dispatch, getState) => {
  dispatch(DELETEMESSAGE.START());
  const token = getState().auth.login.result.token;
  console.log(token);
  return fetch(url + "/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  });
};

export const reducers = {
  newmessagefeed: createReducer(asyncInitialState, {
    ...asyncCases(NEWMESSAGEFEED)
  }),
  mymessagefeed: createReducer(asyncInitialState, {
    ...asyncCases(MYMESSAGEFEED)
  }),
  deletemessage: createReducer(asyncInitialState, {
    ...asyncCases(DELETEMESSAGE)
  })
};
