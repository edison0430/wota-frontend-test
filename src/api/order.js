import request from './request';

export function apiFetchOrder(data) {
  return request({
    url: '/orders',
    method: 'GET',
    params: data,
  });
}
