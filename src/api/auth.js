import request from './request';

export function apiLogin(data) {
  return request({
    url: '/auth/login',
    method: 'POST',
    data,
  });
}
