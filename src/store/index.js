/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

import TablesStore from './modules/TablesStore';
import MenuStore from './modules/MenuStore';
import CategoriesStore from './modules/CategoriesStore';
import ReservationsStore from './modules/ReservationsStore';

const store = new Vuex.Store({
  modules: {
    tablesStore: TablesStore,
    menuStore: MenuStore,
    categoriesStore: CategoriesStore,
    reservationsStore: ReservationsStore,
  }
})

export default store;
