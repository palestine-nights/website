import axios from 'axios';

const Menu = {
  getMenuItem: ID => axios.get(`/menu/${ID}`).then(response => response.data),

  getCategories: () => axios.get('/categories').then(response => response.data),

  getCategoryMenuItems: ID => axios.get(`/categories/${ID}`).then(response => response.data),

  deleteMenuItem: (ID) => {
    const result = axios.delete(`/menu/${ID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return result;
  },

  createMenuItem: (menuItem) => {
    const result = axios.post('/menu', menuItem, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(response => response.data);

    return result;
  },

  updateMenuItem: (menuItem) => {
    const result = axios.put(`/menu/${menuItem.id}`, menuItem, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(response => response.data);

    return result;
  },
};

export default Menu;
