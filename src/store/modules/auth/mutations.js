export default {
  setUser(state, payload) {
    state.id = payload.id;
    state.token = payload.token;
    state.username = payload.username;
  },
};
