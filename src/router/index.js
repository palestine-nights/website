import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import TablesDashboard from '../views/TablesDashboard.vue';
import Reservation from '../views/Reservation.vue';
import Categories from '../views/Categories.vue';
import MenuCategory from '../views/MenuCategory.vue';
import Meal from '../views/Meal.vue';
import EditMenuItem from '../views/EditMenuItem.vue';
import CreateMenuItem from '../views/CreateMenuItem.vue';

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
      name: 'Dashboard',
      path: '/dashboard',
      component: Admin,
    },
    {
      name: 'Table Dashboard',
      path: '/dashboard/tables',
      component: TablesDashboard,
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
    },
    {
      name: 'Create Menu Item',
      path: '/menu/new',
      component: CreateMenuItem,
    },
    {
      name: 'Category',
      path: '/categories/:category_id',
      component: MenuCategory,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// });

export default router;
