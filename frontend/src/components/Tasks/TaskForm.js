import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: ''
  });

  const { title, description, dueDate, priority } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/tasks', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name="title" value={title} onChange={onChange} required placeholder="Title" />
      </div>
      <div>
        <textarea name="description" value={description} onChange={onChange} required placeholder="Description" />
      </div>
      <div>
        <input type="date" name="dueDate" value={dueDate} onChange={onChange} required />
      </div>
      <div>
        <select name="priority" value={priority} onChange={onChange} required>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
