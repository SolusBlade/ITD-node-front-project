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
  return axios.get('/users/logout').then(r => r.data);
};

export const getCurrentUserInfoApi = () => {
  return axios.get('/users/current').then(r => r.data);
};

//requiests for Header
export const switchThemeApi = (data) => {
  return axios.patch('/users/theme', data, {
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTgxMWRhMzgyM2U5ZWM3YmE2NzQ1YyIsImlhdCI6MTY4NzY5MTIwNywiZXhwIjoxNjg3Nzc0MDA3fQ.9p3TIc4aRBZM5I33YQNl72VewivZteuJPavDZzb09g0`
    }
  }).then(res => res.data);
}

export const updateUserApi = (data) => {
  return axios.put('users/profile', data).then(res => res.data);
}

export const updateAvatarApi = (data) => {
  return axios({
    method: 'put',
    url: 'users/avatar',
    data: data,
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTgxMWRhMzgyM2U5ZWM3YmE2NzQ1YyIsImlhdCI6MTY4NzY4NzcyOCwiZXhwIjoxNjg4MjkyNTI4fQ.-QEvHtLHR4hoxHFiHmufLOeYVknTTWdkesKjbMf34K8`
    }
  })
  .then(res => res.data);
}



