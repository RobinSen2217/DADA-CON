import React, { useState } from 'react';

const Login = () => {
    // document.body.style.backgroundImage=''
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()) {
        validationErrors.username = "username is required"
    }

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

    if(!formData.password.trim()) {
        validationErrors.password = "password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = "password should be at least 6 char"
    }

    if(formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "password not matched"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }

  return (
    <div className='flex justify-center items-center w-screen h-screen text-white'>
        <form onSubmit={handleSubmit} className='h-[450px] w-96 bg-black/80 grid grid-cols-1 grid-rows-5 gap-y-4 rounded-lg p-5'>
      <div>
        <label className='block font-semibold '>Username:</label>
        <input
        className='w-full p-1 text-black'
          type="text"
          name="username"
          placeholder='username'  
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.username && <span>{errors.username}</span>}  
      </div>
      <div>
        <label className='block font-semibold '>Email:</label>
        <input
        className='w-full p-1 text-black'
          type="email"
          name="email"
          placeholder='example@gmail.com'
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.email && <span>{errors.email}</span>}  
      </div>
      <div>
        <label className='block font-semibold '>Password:</label>
        <input
        className='w-full p-1 text-black'
          type="password"
          name="password"
          placeholder='******'
          onChange={handleChange} 
        />
          {errors.password && <span>{errors.password}</span>}  
      </div>
      <div>
        <label className='block font-semibold'>Confirm Password:</label>
        <input
        className='w-full p-1 text-black'
          type="password"
          name="confirmPassword"
          placeholder='******'
          onChange={handleChange} 
        />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}  
      </div>
      <button className='bg-purple-600 font-semibold text-white hover:bg-[#2980b9] rounded-lg h-14' type="submit">Submit</button>
    </form>
    </div>

  );
};

export default Login;