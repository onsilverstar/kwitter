import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";

const url = domain + "/likes";

const TOGGLELIKE = createActions("togglelike");
export const togglelike = likeData => (dispatch, getState) => {
  dispatch(TOGGLELIKE.START());
  const token = getState().auth.login.result.token;
  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(likeData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(TOGGLELIKE.SUCCESS(result))) //forceupdate to re render message feeds after like is submitted
    .catch(err => Promise.reject(dispatch(TOGGLELIKE.FAIL(err))));
};

const DELETELIKE = createActions("deletelike");
export const deletelike = likesId => (dispatch, getState) => {
  dispatch(DELETELIKE.START());
  const token = getState().auth.login.result.token;
  return fetch(url + "/" + likesId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => dispatch(DELETELIKE.SUCCESS(result))) //forceupdate to re render message feeds after like is submitted
    .catch(err => Promise.reject(dispatch(DELETELIKE.FAIL(err))));
};

export const reducers = {
  togglelike: createReducer(asyncInitialState, {
    ...asyncCases(TOGGLELIKE)
  }),
  deletelike: createReducer(asyncInitialState, {
    ...asyncCases(DELETELIKE)
  })
};
