import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, { email, password });
      console.log('Signup successful:', response.data);
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed! Please try again.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
