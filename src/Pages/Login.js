import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        console.log('Login successful:', response.data[0]);
        alert('Login successful!');
      } else {
        console.error('Invalid credentials');
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed! Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
