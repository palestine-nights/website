/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import TablesStore from './modules/TablesStore';
import MenuStore from './modules/MenuStore';
import CategoriesStore from './modules/CategoriesStore';
import ReservationsStore from './modules/ReservationsStore';

import Auth from '@/services/api/Auth';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: sessionStorage.getItem('token') || '',
    msg: {
      text: '',
      color: '',
      show: false,
    },
  },
  getters: {
    isAuthenticated: state => !!state.token,
  },
  mutations: {
    SET_JWT: (state, payload) => {
      state.token = payload;
    },
    MSG_SUCCESS: (state, text) => {
      state.msg = {
        show: true,
        text: text,
        color: 'success',
      }
    },
    MSG_ERROR: (state, text) => {
      state.msg = {
        show: true,
        text: text,
        color: 'error',
      }
    },
  },
  actions: {
    LOGIN: (context, payload) =>  {
      const authUrl = process.env.VUE_APP_AUTH_URL;

      return Auth.login(authUrl, payload.username, payload.password)
        .then(response => {
          context.commit('SET_JWT', response.token);
          sessionStorage.setItem('token', response.token);
          return response;
        })
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data.error);
          throw error;
        });
    },
    LOGOUT: (context, payload) => {
      sessionStorage.removeItem('token');
      context.commit('SET_JWT', null);

      return new Promise((resolve) => resolve());
    },
  },
  modules: {
    tablesStore: TablesStore,
    menuStore: MenuStore,
    categoriesStore: CategoriesStore,
    reservationsStore: ReservationsStore,
  }
})

export default store;
