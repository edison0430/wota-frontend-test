import { apiLogin } from '@/api/auth';

export default {
  async login(context, payload) {
    const response = await apiLogin(payload);
    const {
      data: { id, token, username },
    } = response;

    if (!token) throw new Error({ message: 'something weng wrong' });

    sessionStorage.setItem('id', id);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', username);

    context.commit('setUser', {
      id,
      token,
      username,
    });
  },
  logout(context) {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');

    context.commit('setUser', {
      id: null,
      token: null,
      username: null,
    });
  },
};
