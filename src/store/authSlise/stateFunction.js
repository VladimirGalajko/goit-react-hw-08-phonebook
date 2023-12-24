export const handlePending = state => {
  return state;
};

export const handlePendingCurrentUser = state => {
  state.isRefreshing = true;
};

export const handleRejected = state => {
  return state;
};

export const handleRejectedCurrentUser = state => {
  state.isRefreshing = false;
};

export const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleFulfilledCurrentUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
