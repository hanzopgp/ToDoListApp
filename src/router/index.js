import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home';
import Login from '../view/login';

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
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