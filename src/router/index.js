import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import Admin from '../views/admin/Admin.vue';
import TablesDashboard from '../views/admin/TablesDashboard.vue';
import Reservation from '../views/Reservation.vue';
import Categories from '../views/Categories.vue';
import MenuCategory from '../views/MenuCategory.vue';
import Meal from '../views/Meal.vue';
import EditMenuItem from '../views/admin/EditMenuItem.vue';
import CreateMenuItem from '../views/admin/CreateMenuItem.vue';
import Login from '../views/Login.vue';
import ReservationDashboard from '../views/admin/ReservationDashboard.vue';

import store from '../store';

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }

  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }

  next('/login');
};


Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'Reservation',
      path: '/reservations/new',
      component: Reservation,
    },
    {
      name: 'Menu',
      path: '/categories',
      component: Categories,
    },
    {
      name: 'Menu Item',
      path: '/menu/:id(\\d+)',
      component: Meal,
    },
    {
      name: 'Edit Menu Item',
      path: '/menu/edit/:id(\\d+)',
      component: EditMenuItem,
      beforeEnter: ifAuthenticated,
    },
    {
      name: 'Create Menu Item',
      path: '/menu/new',
      component: CreateMenuItem,
      beforeEnter: ifAuthenticated,
    },
    {
      name: 'Category',
      path: '/categories/:category_id',
      component: MenuCategory,
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      name: 'Dashboard',
      path: '/admin',
      component: Admin,
      beforeEnter: ifAuthenticated,
      children: [
        {
          name: 'Table Dashboard',
          path: 'tables',
          component: TablesDashboard,
        },
        {
          name: 'Reservation Dashboard',
          path: 'reservations',
          component: ReservationDashboard,
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

export default router;
