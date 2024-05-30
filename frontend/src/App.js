import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import Navbar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks/new" element={<TaskList />} />
          <Route path="/tasks/pending" element={<TaskList />} />
          <Route path="/tasks/completed" element={<TaskList />} />
          <Route path="/tasks/calendar" element={<TaskList />} />
          <Route path="/" element={<TaskList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;