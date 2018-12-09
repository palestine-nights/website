import axios from 'axios';

export default {
  getCategories: () => axios.get('/categories').then(response => response.data),
  deleteMenuItem: ID => axios.delete(`/menu/${ID}`),
  createMenuItem: menuItem => axios.post('/menu', menuItem).then(response => response.data),
  getMenuItem: ID => axios.get(`/menu/${ID}`).then(response => response.data),
  updateMenuItem: menuItem => axios.put(`/menu/${menuItem.id}`, menuItem).then(response => response.data),
  getCategoryMenuItems: ID => axios.get(`/categories/${ID}`).then(response => response.data),
};
