import axios from 'axios';

export default {
  getReservations: () => axios.get('/reservations').then(response => response.data),
  createReservation: obj => axios.post('/reservations', obj).then(response => response.data),
};
