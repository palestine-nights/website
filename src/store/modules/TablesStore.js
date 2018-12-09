/* eslint-disable */

import TablesAPI from '@/services/api/RestaurantTables';

export default {
  namespaced: true,
  state: {
    msg: {
      text: '',
      color: '',
      show: false,
    },
    tables: [],
    table: {
      description: '',
      places: 0,
    },
    loadingCategories: true,
  },
  mutations: {
    SET_TABLES: (state, payload) => {
      state.tables = payload;
    },
    SET_TABLE: (state, payload) => {
      state.table = payload;
    },
    SET_LOADING:  (state, payload) => {
      state.loadingCategories = payload;
    },
    APPEND_TABLE: (state, table) => {
      state.tables.push(table);
    },
    REMOVE_TABLE: (state, ID) => {
      state.tables = state.tables.filter(item => item.id !== ID);
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
    GET_TABLES: (context) =>  {
      context.commit('SET_LOADING', true);

      return TablesAPI.getTables()
        .then(tables => {
          context.commit('SET_TABLES', tables);
        })
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data);
        })
        .finally(() => {
          context.commit('SET_LOADING', false);
        })
    },
    CREATE_TABLE: (context, table) => {
      return TablesAPI.createTable(table)
        .then(table => {
          context.commit('APPEND_TABLE', table);
          context.commit('MSG_SUCCESS', `Table with ID ${table.id} was successfully created.`);
        })
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data);
        })
    },
    DELETE_TABLE: (context, ID) => {
      return TablesAPI.deleteTable(ID)
        .then(() => {
          context.commit('REMOVE_TABLE', ID);
          context.commit('MSG_SUCCESS', `Table with ID ${table.id} was successfully removed.`);
        })
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data);
        })
    },
  },
};
