/* eslint-disable */

import CategoriesAPI from '@/services/api/Menu';

export default {
  namespaced: true,
  state: {
    msg: {
      text: '',
      color: '',
      show: false,
    },
    categories: [],
    loading: true,
  },
  mutations: {
    SET_CATEGORIES: (state, payload) => {
      state.categories = payload;
    },
    SET_LOADING: (state, payload) => {
      state.loading = payload;
    },
    CLOSE_MSG: (state) => {
      state.msg.show = false;
      state.msg.text = '';
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
    GET_CATEGORIES: (context) =>  {
      context.commit('SET_LOADING', true);

      return CategoriesAPI.getCategories()
        .then(categories => {
          context.commit('SET_CATEGORIES', categories);
        })
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data.error);
        })
        .finally(() => {
          context.commit('SET_LOADING', false);
        })
    },
  },
};
