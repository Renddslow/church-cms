const qs = require('qs');

const api = (url, params = {}) => {
  return fetch(`http://localhost:8080${url}${qs.stringify(params, { addQueryPrefix: true })}`, {
    headers: {
      authorization: `Bearer ${window.localStorage.getItem('fca:token')}`,
    },
  })
    .then((d) => {
      if (d.status !== 200) {
        return (window.location.href = '/login');
      }
      return d.json();
    })
    .catch(() => (window.location.href = '/login'));
};

export default api;
