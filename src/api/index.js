import axios from 'axios';

const token = localStorage.getItem('token');

// permet d'obtenir l'autorisation d'acces aux donnees de l'api grace au token (si il existe)
axios.interceptors.request.use(function (config) {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;