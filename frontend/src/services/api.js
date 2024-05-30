import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = async (name, email, password) => {
  try {
    const res = await axios.post(`${API_URL}/users/register`, { name, email, password });
    return res.data;
  } catch (error) {
    console.error(error);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    return res.data;
  } catch (error) {
    console.error(error);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
};

export const getTasks = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(`${API_URL}/tasks`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
};

export const createTask = async (task) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(`${API_URL}/tasks`, task, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
};

export const updateTask = async (taskId, updates) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.put(`${API_URL}/tasks/${taskId}`, updates, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
};

export const deleteTask = async (taskId) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.delete(`${API_URL}/tasks/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
};