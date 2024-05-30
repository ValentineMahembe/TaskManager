import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/login', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="email" name="email" value={email} onChange={onChange} required placeholder="Email" />
      </div>
      <div>
        <input type="password" name="password" value={password} onChange={onChange} required placeholder="Password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;