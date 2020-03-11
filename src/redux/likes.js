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
export const togglelike = (messageId, likeData) => (dispatch, getState) => {
  dispatch(TOGGLELIKE.START());
  const token = getState().auth.login.result.token;
  console.log(token);
  return fetch(url + "/" + messageId, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(likeData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(TOGGLELIKE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(TOGGLELIKE.FAIL(err))));
};

export const reducers = {
  togglelike: createReducer(asyncInitialState, {
    ...asyncCases(TOGGLELIKE)
  })
};
