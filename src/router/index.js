import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import Reservation from '../views/Reservation.vue';
import Menu from '../views/Menu.vue';
import MenuCategory from '../views/MenuCategory.vue';
import Meal from '../views/Meal.vue';
import EditMeal from '../views/EditMeal.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'admin',
      path: '/dashboard',
      component: Admin,
    },
    {
      name: 'new-reservation',
      path: '/reservation',
      component: Reservation,
    },
    {
      name: 'Menu',
      path: '/menu',
      component: Menu,
    },
    {
      name: 'Menu Item',
      path: '/menu/:id(\\d+)',
      component: Meal,
    },
    {
      name: 'Edit Menu Item',
      path: '/menu/edit/:id(\\d+)',
      component: EditMeal,
    },
    {
      name: 'Category Menu',
      path: '/menu/:category',
      component: MenuCategory,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
