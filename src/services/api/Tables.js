import axios from 'axios';

const Tables = {
  getTable: ID => axios.get(`/tables/${ID}`).then(response => response.data),

  getTables: () => axios.get('/tables').then(response => response.data),

  deleteTable: (ID) => {
    const result = axios.delete(`/tables/${ID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return result;
  },

  createTable: (table) => {
    const result = axios.post('/tables', table, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(response => response.data);

    return result;
  },

  updateTable: (ID, table) => {
    const result = axios.post(`/tables/${ID}`, table, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(response => response.data);

    return result;
  },
};

export default Tables;
