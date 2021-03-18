import axios from "axios";
import router from '@/router';

export function login({commit}, id) {
  const email = id.email;
  const password = id.password;
  axios.post("http://138.68.74.39/api/login", {email: email, password: password}).then((response) => {
    const token = response.data.token;
<<<<<<< HEAD
    localStorage.setItem('access_token', token);
=======
    localStorage.setItem('token', token);
    axios.interceptors.request.use(function (config) {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }),
>>>>>>> f52d71de74329fc739f2a17141d070ab9b9f87b9
    commit("setToken", token);
    router.push("/"); 
  }).catch((err) => {
    console.log("ca n'a pas marché...."+err);
  });
}

export function register({commit}, id) {
  const name = id.name;
  const email = id.email;
  const password = id.password;
  axios.post("http://138.68.74.39/api/register", {name: name, email: email, password: password}).then((response) => {
<<<<<<< HEAD
    commit("setToken", );
  console.log(response);
=======
    const token = response.data.token;
    localStorage.setItem('token', token);
    axios.interceptors.request.use(function (config) {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }),
    commit("setToken", token);
    router.push("/"); 
  // console.log(response);
>>>>>>> f52d71de74329fc739f2a17141d070ab9b9f87b9
  }).catch((err) => {
    console.log(err);
  })
}