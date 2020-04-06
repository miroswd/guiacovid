import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covidlist.pythonanywhere.com/api',
});

export default api;
