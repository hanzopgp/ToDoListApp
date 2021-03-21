import axios from 'axios';

// permet d'obtenir l'autorisation d'acces aux donnees de l'api grace au token (si il existe)
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;