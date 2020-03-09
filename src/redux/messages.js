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

export const reducers = {
  newmessagefeed: createReducer(asyncInitialState, {
    ...asyncCases(NEWMESSAGEFEED)
  })
};
