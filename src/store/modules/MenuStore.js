/* eslint-disable */

import MenuAPI from '@/services/api/Menu';

export default {
  namespaced: true,
  state: {
    msg: {
      text: '',
      color: '',
      show: false,
    },
    menuItems: [],
    loading: true,
  },
  mutations: {
    SET_MENU_ITEMS: (state, payload) => {
      state.menuItems = payload;
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
    GET_MENU_ITEMS: (context) => {
      context.commit('SET_LOADING', true);

      return MenuAPI.getMenuItems()
        .then(menuItems => {
          context.commit('SET_MENU_ITEMS', menuItems);
        })
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data.error);
        })
        .finally(() => {
          context.commit('SET_LOADING', false);
        })
    },
    GET_CATEGORY_MENU_ITEMS: (context, ID) => {
      context.commit('SET_LOADING', true);

      return MenuAPI.getCategoryMenuItems(ID)
        .then(menuItems => {
          context.commit('SET_MENU_ITEMS', menuItems);
        })
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data.error);
        })
        .finally(() => {
          context.commit('SET_LOADING', false);
        })
    },
    CREATE_MENU_ITEM: (context, menuItem) => {
      context.commit('SET_LOADING', true);

      return MenuAPI.createMenuItem(menuItem)
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data.error);
        })
        .finally(() => {
          context.commit('SET_LOADING', false);
        })
    },
    GET_MENU_ITEM: (context, ID) => {
      context.commit('SET_LOADING', true);

      return MenuAPI.getMenuItem(ID)
      .catch(error => {
        context.commit('MSG_ERROR', error.response.data.error);
      })
      .finally(() => {
        context.commit('SET_LOADING', false);
      })
    },
    UPDATE_MENU_ITEM: (context, object) => {
      context.commit('SET_LOADING', true);

      return MenuAPI.updateMenuItem(object)
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data.error);
        })
        .finally(() => {
          context.commit('SET_LOADING', false);
        })
    },
    DELETE_MENU_ITEM: (context, ID) => {
      context.commit('SET_LOADING', true);

      return MenuAPI.deleteMenuItem(ID).then(() => {
        context.commit('MSG_SUCCESS', `Meal with ID ${ID} was successfully removed.`);
      })
      .catch(error => {
        context.commit('MSG_ERROR', error.response.data.error);
      })
      .finally(() => {
        context.commit('SET_LOADING', false);
      })
    }
  },
};
