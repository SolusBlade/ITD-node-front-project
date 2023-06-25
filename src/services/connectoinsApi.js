import axios from 'axios';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global';

// Запросы для работы с юзером

export const loginApi = user => {
  return axios.post('/api/user/login', user).then(r => r.data);
};

export const registerApi = user => {
  return axios.post('/api/user/register', user).then(r => r.data);
};

export const logOutApi = () => {
  return axios.get('/api/user/logout').then(r => r.data);
};

export const getCurrentUserInfoApi = () => {
  return axios.get('/api/user/info').then(r => r.data);
};

export const addUserBalanceApi = balance => {
  return axios.put('/api/user/addBalance', balance).then(r => r.data);
};

// Запросы для персонального плана

export const preCalcPersonalPlanApi = planData => {
  return axios.post('/api/personal-plan/pre', planData).then(r => r.data);
};

export const calcPersonalPlanApi = planData => {
  return axios.post('/api/personal-plan', planData).then(r => r.data);
};

export const getPersonalPlanApi = () => {
  return axios.get('/api/personal-plan').then(r => r.data);
};

export const updatePersonalPlanApi = planData => {
  return axios.put('/api/personal-plan', planData).then(r => r.data);
};

export const getPersonalPlanLimitsApi = data => {
  return axios.get('/api/personal-plan/daily-limit', data).then(r => r.data);
};

// Запросы для транзакций

export const getCashflowCategoriesApi = () => {
  return axios.get('/api/cashflow/category').then(r => r.data);
};

export const getCashflowPresavingsApi = () => {
  return axios.get('/api/cashflow/presaving').then(r => r.data);
};

export const addCashflowTransactionApi = transaction => {
  return axios.post('/api/cashflow/', transaction).then(r => r.data);
};

export const getCashflowTransactionsApi = ({ year, month }) => {
  return axios
    .get('/api/cashflow', {
      params: {
        year,
        month,
      },
    })
    .then(r => r.data);
};

export const removeCashflowTransactionApi = id => {
  return axios.delete(`/api/cashflow/${id}`).then(r => r.data);
};

export const updateCashflowTransactionApi = (id, newTransaction) => {
  return axios.put(`/api/cashflow/${id}`, newTransaction).then(r => r.data);
};

export const getCashflowCategoriesPercentageApi = ({ year, month }) => {
  return axios
    .get('/api/cashflow/stat', {
      params: {
        year,
        month,
      },
    })
    .then(r => r.data);
};

// Запросы для статистики

export const getDynamicsApi = () => {
  return axios.get('/api/dynamics/').then(r => r.data);
};

export const getDynamicsByMonthApi = (year, month) => {
  return axios
    .get('/api/dynamics/by-month', {
      params: {
        year,
        month,
      },
    })
    .then(r => r.data);
};


export const addDynamicsImageApi = data => {
  return axios({
    method: 'patch',
    url: '/api/dynamics/flatImage',
    data: data,
  });
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