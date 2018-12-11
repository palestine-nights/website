/* eslint-disable */

import ReservationsAPI from '@/services/api/Reservations';

export default {
  namespaced: true,
  state: {
    msg: {
      text: '',
      color: '',
      show: false,
    },
    reservations: [],
    loading: true,
  },
  mutations: {
    SET_RESERVATIONS: (state, payload) => {
      state.reservations = payload;
    },
    SET_RESERVATION: (state, index, payload) => {
      state.reservations[index] = payload;
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
    GET_RESERVATIONS: (context) => {
      context.commit('SET_LOADING', true);
      console.log(ReservationsAPI)

      return ReservationsAPI.getReservations()
        .then(reservations => {
          context.commit('SET_RESERVATIONS', reservations);
        })
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data.error);
        })
        .finally(() => {
          context.commit('SET_LOADING', false);
        })
    },
    CREATE_RESERVATION: (context, reservation) => {
      context.commit('SET_LOADING', true);

      return ReservationsAPI.createReservation(reservation)
        .then(reservation => {
          context.commit('MSG_SUCCESS', 'Your Reservation was successfully created.');
        })
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data.error);
        })
        .finally(() => {
          context.commit('SET_LOADING', false);
        })
    },
    APPROVE: (context, ID)=> {
      context.commit('SET_LOADING', true);

      return ReservationsAPI.approve(ID)
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data.error);
        })
        .finally(() => {
          context.commit('SET_LOADING', false);
        })
    },
    CANCEL: (context, ID)=> {
      context.commit('SET_LOADING', true);

      return ReservationsAPI.cancel(ID)
        .catch(error => {
          context.commit('MSG_ERROR', error.response.data.error);
        })
        .finally(() => {
          context.commit('SET_LOADING', false);
        })
    }
  },
};
