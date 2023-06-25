import axios from 'axios';
// https://taskpro-api.onrender.com
axios.defaults.baseURL = 'https://taskpro-api.onrender.com';

// Запросы для работы с юзером

export const loginApi = user => {
  return axios.post('/users/login', user).then(r => r.data);
};

export const registerApi = user => {
  return axios.post('/users/register', user).then(r => r.data);
};

export const logOutApi = () => {
  return axios.post('/users/logout').then(r => r.data);
};

export const getCurrentUserInfoApi = () => {
  return axios.get('/users/current').then(r => r.data);
};

export const switchThemeApi = (data) => {
  return axios.patch('/users/theme', data).then(res => res.data);
}

export const updateUserApi = (data) => {
  return axios.put('users/profile', data).then(res => res.data);
}

export const updateAvatarApi = (data) => {
  return axios.put('users/avatar', data)
  .then(res => res.data);
}

// Запросы для работы с бордами

// Запросы для работы с тасками



