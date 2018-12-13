import axios from 'axios';

export default {
  login: (url, username, password) => {
    const result = axios.post(`${url}/auth`, {
      username,
      password,
    }).then(response => response.data);

    return result;
  },
};
