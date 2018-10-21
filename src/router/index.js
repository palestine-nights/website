import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MenuView from '../views/MenuView.vue';

import AppetizersMenuView from '../views/AppetizersMenuView.vue';
import SaladsMenuView from '../views/SaladsMenuView.vue';
import SoupsMenuView from '../views/SoupsMenuView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu/',
      name: 'menu',
      component: MenuView,
    },
    {
      path: '/menu/appetizers',
      name: 'appetizers',
      component: AppetizersMenuView,
    },
    {
      path: '/menu/soups',
      name: 'soups',
      component: SoupsMenuView,
    },
    {
      path: '/menu/salads',
      name: 'salads',
      component: SaladsMenuView,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
