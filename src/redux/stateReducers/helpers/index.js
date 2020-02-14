export const asyncInitialState = {
  result: null,
  loading: false,
  error: null
};

export const asyncCases = ({ START, SUCCESS, FAIL }) => ({
  [START]: (state, action) => {
    state.loading = true;
    state.error = null;
  },
  [SUCCESS]: (state, action) => {
    state.loading = false;
    state.result = action.payload;
  },
  [FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  }
});

export const getInitStateFromStorage = (key, initialState) => {
  const storedState = JSON.parse(localStorage.getItem(key));

  if (storedState) {
    const unchangedInitialStateProps =
      Object.keys(storedState).every(
        property => initialState[property] !== undefined
      ) &&
      Object.keys(initialState).every(
        property => storedState[property] !== undefined
      );
    if (unchangedInitialStateProps) {
      return storedState;
    }
  }
  return initialState;
};
