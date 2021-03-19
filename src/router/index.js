import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home';
import Login from '../view/login';

import axios from "axios";

import store from '../store/';

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      const token = store.state.account.token; 
      if(token) {
        axios.interceptors.request.use(function (config) {
          config.headers.Authorization = `Bearer ${token}`;
          return config;
        }),
        next();
      } else {
        next('/login');
      }
    },
    
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router