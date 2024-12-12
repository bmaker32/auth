import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export const SignUp = () => {
  const [formData,setFormData] = useState({
    username:'',
    email:'',
    password:''
  })
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log(formData)
  }
  const formHandler = async(e)=>{
    try{
      e.preventDefault()
      const response = await axios.post('http://localhost:3003/api/auth/signUp',formData)
      console.log(response)
      setFormData({username:'',email:'',password:''})
    }catch{
      console.log('error')
    }
    
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='w-full max-w-md p-6 bg-white shadow-md rounded-lg'>
        <h2 className='text-3xl font-bold text-gray-800 text-center mb-6'>Sign Up</h2>
        <form action="" onSubmit={formHandler}>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700'>Username</label>
            <input 
              type='text' 
              name='username' 
              id='username' 
              className='mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none'
              placeholder='Enter your username' 
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input 
              type='email' 
              name='email' 
              id='email' 
              className='mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none'
              placeholder='Enter your email' 
              onChange={handleChange}
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
            <input 
              type='password' 
              name='password' 
              id='password' 
              className='mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none'
              placeholder='Enter your password'
              onChange={handleChange} 
            />
          </div>
          <button 
            className='w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300'>
            Sign Up
          </button>
          <div className='mt-4'>
            <button 
              type='submit'
              className='w-full p-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-md font-semibold hover:bg-gray-200 transition duration-300 flex items-center justify-center'>
              <img src='https://www.google.com/favicon.ico' alt='Google icon' className='w-5 h-5 mr-2' />
              Continue with Google
            </button>
          </div>
        </form>
        <p className='text-sm text-center text-gray-600 mt-4'>
          Already have an account? 
            <Link to='/signIn'>
              <span className='text-blue-600'> Sign in</span>
            </Link>
           
        </p>
      </div>
    </div>
  );
};
