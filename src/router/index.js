import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AdminView from '../views/AdminView.vue';
import ReservationView from '../views/ReservationView.vue';
import MenuView from '../views/MenuView.vue';

import AppetizersMenuView from '../views/AppetizersMenuView.vue';
import SaladsMenuView from '../views/SaladsMenuView.vue';
import SoupsMenuView from '../views/SoupsMenuView.vue';
import DrinksMenuView from '../views/DrinksMenuView.vue';
import MainDishesMenuView from '../views/MainDishesMenuView.vue';

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
      name: 'Appetizers Menu',
      path: '/menu/appetizers',
      component: AppetizersMenuView,
    },
    {
      name: 'Soups Menu',
      path: '/menu/soups',
      component: SoupsMenuView,
    },
    {
      name: 'Salads Menu',
      path: '/menu/salads',
      component: SaladsMenuView,
    },
    {
      name: 'Drinks Menu',
      path: '/menu/drinks',
      component: DrinksMenuView,
    },
    {
      name: 'Main Dishes Menu',
      path: '/menu/main-dishes',
      component: MainDishesMenuView,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
