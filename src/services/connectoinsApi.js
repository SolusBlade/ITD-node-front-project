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

export const switchThemeApi = data => {
  return axios.patch('/users/theme', data).then(res => res.data);
};

export const updateUserApi = data => {
  return axios.put('users/profile', data).then(res => res.data);
};

export const updateAvatarApi = data => {
  return axios.put('users/avatar', data).then(res => res.data);
};

// Запросы для работы с бордами
export const createNewBoardApi = data => {
  return axios.post('/boards', data).then(res => res.data);
};

export const getAllBoardsApi = () => {
  return axios.get('/boards').then(res => res.data);
};

export const updateBoardByIdApi = ({ id, data }) => {
  return axios.put(`/boards/${id}`, data).then(res => res.data);
};

export const deleteBoardByIdApi = id => {
  return axios.delete(`/boards/${id}`).then(res => res.data);
};

export const createNewColumnApi = ({ idBoard, data }) => {
  return axios.post(`/boards/${idBoard}/columns`, data).then(res => res.data);
};

export const updateColumnByIdApi = ({ idColumn, idBoard, data }) => {
  return axios
    .patch(`/boards/${idBoard}/columns/${idColumn}`, data)
    .then(res => res.data);
};

export const deleteColumnByIdApi = ({ idColumn, idBoard }) => {
  return axios
    .delete(`/boards/${idBoard}/columns/${idColumn}`)
    .then(res => res.data);
};

// Запросы для работы с тасками

export const createNewTaskApi = data => {
  return axios.post('/tasks', data).then(res => res.data);
};

export const getAllTasksApi = () => {
  return axios.get('/tasks').then(res => res.data);
};

export const getTaskByIdApi = idTask => {
  return axios.get(`/tasks/${idTask}`).then(res => res.data);
};

export const updateTaskByIdApi = ({ idTask, data }) => {
  return axios.put(`/tasks/${idTask}`, data).then(res => res.data);
};

export const updateTaskColumnByIdApi = ({ idTask, idColumn }) => {
  return axios.patch(`/tasks/${idTask}`, {columnId: idColumn}).then(res => res.data);
};

export const deleteTaskByIdApi = idTask => {
  return axios.delete(`/tasks/${idTask}`).then(res => res.data);
};
