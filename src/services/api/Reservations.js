import axios from 'axios';

export default {
  getReservations: () => axios.get('/reservations').then(response => response.data),

  createReservation: obj => axios.post('/reservations', obj).then(response => response.data),

  approve: (ID) => {
    const result = axios.post(`/reservations/approve/${ID}`, null, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }).then(response => response.data);
    return result;
  },

  cancel: (ID) => {
    const result = axios.post(`/reservations/cancel/${ID}`, null, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    }).then(response => response.data);
    return result;
  },
};
