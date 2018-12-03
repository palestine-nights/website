import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AdminView from '../views/AdminView.vue';
import ReservationView from '../views/ReservationView.vue';
import MenuView from '../views/MenuView.vue';

import MenuCategoryView from '../views/MenuCategoryView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'admin',
      path: '/dashboard',
      component: AdminView,
    },
    {
      name: 'new-reservation',
      path: '/reservation',
      component: ReservationView,
    },
    {
      name: 'Menu',
      path: '/menu',
      component: MenuView,
    },
    {
      name: 'Category Menu',
      path: '/menu/:category',
      component: MenuCategoryView,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
