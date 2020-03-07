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

const MESSAGEFEED = createActions("messageFeed");

export const messageFeed = messageFeedData => dispatch => {
  dispatch(MESSAGEFEED.START());

  return fetch(url + "?limit=100&offset=0", {
    method: "GET",
    headers: jsonHeaders,
    body: JSON.stringify(messageFeedData)
  })
    .then(handleJsonResponse)
    .then(result => {
      dispatch(MESSAGEFEED.SUCCESS(result));
      console.log(result);
    })
    .catch(err => Promise.reject(dispatch(MESSAGEFEED.FAIL(err))));
};

export const reducers = {
  messageFeed: createReducer(asyncInitialState, {
    ...asyncCases(MESSAGEFEED)
  })
};
