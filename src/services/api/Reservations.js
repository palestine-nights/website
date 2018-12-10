import axios from 'axios';

export default {
  getReservations: () => axios.get('/reservations').then(response => response.data),
  createReservation: obj => axios.post('/reservations', obj).then(response => response.data),
  Approve: ID => axios.post(`/reservations/approve/${ID}`).then(response => response.data),
  Cancel: ID => axios.post(`/reservations/cancel/${ID}`).then(response => response.data),
};
