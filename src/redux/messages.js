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

export const mymessagefeed = mymessagefeedData => dispatch => {
  dispatch(MYMESSAGEFEED.START());
  return fetch(url + "?limit=100&offset=0&username=aly24", {
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

export const reducers = {
  newmessagefeed: createReducer(asyncInitialState, {
    ...asyncCases(NEWMESSAGEFEED)
  }),
  mymessagefeed: createReducer(asyncInitialState, {
    ...asyncCases(MYMESSAGEFEED)
  })
};
