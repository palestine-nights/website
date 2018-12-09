import axios from 'axios';

export default {
  getTables: () => axios.get('/tables').then(response => response.data),
  getTable: ID => axios.get(`/tables/${ID}`).then(response => response.data),
  deleteTable: ID => axios.delete(`/tables/${ID}`),
  createTable: table => axios.post('/tables', table).then(response => response.data),
  updateTable: (ID, table) => axios.post(`/tables/${ID}`, table).then(response => response.data),
};
