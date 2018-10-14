import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'

import AppetizersMenu from '../views/AppetizersMenu.vue'
import SaladsMenu     from '../views/SoupsMenu.vue'
import SoupsMenu      from '../views/SoupsMenu.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/menu/appetizers',
      component: AppetizersMenu
    },
    {
      path: '/menu/soups',
      component: SoupsMenu
    },
    {
      path: '/menu/salads',
      component: SaladsMenu
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
