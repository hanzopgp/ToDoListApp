import axios from "axios";

export function login({commit}, id) {
  console.log("in login function (actions) " + id);
  const email = id.email;
  const password = id.password;
  axios.post("http://138.68.74.39/api/login", {email: email, password: password}).then((response) => {
    console.log("ca a marche !" + response.data);
    commit("setToken", response.data);
  }).catch((err) => {
    console.log("ca n'a pas marché...."+err);
  });
}

export function register({commit}, id) {
  const name = id.name;
  const email = id.email;
  const password = id.password;
  axios.post("http://138.68.74.39/api/register", {name: name, email: email, password: password}).then((response) => {
  console.log(response);
  }).catch((err) => {
    console.log(err);
  })
  commit("setToken", '');
}