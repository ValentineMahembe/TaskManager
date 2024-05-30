import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import { Link } from 'react-router-dom';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getTasks();
        if (res.success) {
          setTasks(res.tasks);
        } else {
          setError(res.message);
        }
      } catch (err) {
        setError('An error occurred while fetching tasks.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="task-list">
      <h1>Task Manager</h1>
      <div className="task-manager-header">
        <h2>Your Tasks</h2>
        <Link to="/add-task" className="btn btn-primary">Add Task</Link>
      </div>
      {tasks.length === 0 ? (
        <div>
          <p>No tasks available. Add a new task to get started!</p>
          <Link to="/add-task" className="btn btn-primary">Add Task</Link>
        </div>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <p>Status: {task.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;