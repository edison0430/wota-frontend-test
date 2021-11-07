import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      id: sessionStorage.getItem('id') || null,
      token: sessionStorage.getItem('token') || null,
      username: sessionStorage.getItem('username') || null,
    };
  },
  mutations,
  actions,
  getters,
};
