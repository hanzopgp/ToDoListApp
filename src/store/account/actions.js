import axios from "axios";
import router from '@/router';

export function login({commit}, id) {
  const email = id.email;
  const password = id.password;
  axios.post("http://138.68.74.39/api/login", {email: email, password: password}).then((response) => {
    const token = response.data.token;
    localStorage.setItem('access_token', token);
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
    commit("setToken", );
  console.log(response);
  }).catch((err) => {
    console.log(err);
  })
}