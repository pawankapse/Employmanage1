
import React, { useState } from 'react';
import axios from 'axios';
import './style/Signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/saveuser', formData);
      console.log(res.data);
      alert('User created successfully!');
      navigate('/Login');
    } catch (err) {
      console.error(err);
      alert('Error creating user!');
    }
  };

  return (
    <div className='account'>
      <h2 className="heading">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <h4>Name</h4>
        <input type='text' name='name' placeholder='Enter Name' className='ename' onChange={handleChange} />
        <h4>Email</h4>
        <input type='email' name='email' placeholder='Enter Email' className='email' onChange={handleChange} />
        <h4>Password</h4>
        <input type='password' name='password' placeholder='Enter Password' className='ppswd' onChange={handleChange} />
        <button type='submit' className='sbutton'>Submit</button>
      </form>
    </div>
  );
}

