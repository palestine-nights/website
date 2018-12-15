import axios from 'axios';

const Menu = {
  /**
   * Get information about menu item.
   */
  getMenuItem: ID => axios.get(`/menu/${ID}`).then(response => response.data),

  /**
   * Get list of categories in right order.
   */
  getCategories: () => axios.get('/categories').then(response => response.data),

  /**
   * Get list of menu items for specified category ID.
   */
  getCategoryMenuItems: ID => axios.get(`/categories/${ID}`).then(response => response.data),

  /**
   * Get list of all menu items.
   */
  getMenuItems: () => axios.get('/menu').then(response => response.data),

  /**
   * Delete menu item with specified ID. (Admin)
   */
  deleteMenuItem: (ID) => {
    const result = axios.delete(`/menu/${ID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return result;
  },

  /**
   * Create new menu item. (Admin)
   */
  createMenuItem: (menuItem) => {
    const result = axios.post('/menu', menuItem, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(response => response.data);

    return result;
  },

  /**
   * Update fields for menu item. (Admin)
   */
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
