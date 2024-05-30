import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response);
  };

  const handleCreateTask = async () => {
    const newTask = { task };
    const response = await createTask(newTask);
    if (response._id) {
      setTasks([...tasks, response]);
      setTask('');
    } else {
      setMessage('Failed to create task');
    }
  };

  const handleDeleteTask = async (id) => {
    const response = await deleteTask(id);
    if (response.msg === 'Task removed') {
      setTasks(tasks.filter((t) => t._id !== id));
    } else {
      setMessage('Failed to delete task');
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="New Task" />
      <button onClick={handleCreateTask}>Add Task</button>
      <ul>
        {tasks.map((t) => (
          <li key={t._id}>
            {t.task} <button onClick={() => handleDeleteTask(t._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{message}</p>
    </div>
  );
};

export default Tasks;
