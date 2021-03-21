import axios from "@/api";
import router from '@/router';

// permet de se connecter 
// envoie requete a l'api et stock le token renvoye dans le local storage +
// commit (execute une fonction de ./mutations.js) funtion permettant de mettre a jour l'info dans le state

export async function login({commit}, id) {
  const email = id.email;
  const password = id.password;

  let msg = '';

  await axios.post("http://138.68.74.39/api/login", {email: email, password: password}).then((response) => {
    const token = response.data.token;
    localStorage.setItem('token', token);
    commit("setToken", token);
    router.push("/"); 
  }).catch((err) => {
    msg = "Erreur: L'identifiant ou le mot de passe est incorrect. Status : " + err.response.status;
  });

  return msg;
}

// meme chose que le prcedent pour l'inscription
export async function register({commit}, id) {
  const name = id.name;
  const email = id.email;
  const password = id.password;

  let msg = '';

  await axios.post("http://138.68.74.39/api/register", {name: name, email: email, password: password}).then((response) => {
    const token = response.data.token;
    localStorage.setItem('token', token);
    commit("setToken", token);
    router.push("/"); 
  }).catch((err) => {
    const status = err.response.status;
    if(status == 409) {
      msg = "Erreur : L'adresse email est déjà utilisée (status : " + err.response.status + ").";
    }
    
  });

  return msg;
}

// remove token du localstorage et redirige vers login
export function logout({commit}) {
  localStorage.removeItem('token');
  commit('setToken', '');
  router.push('login');
}