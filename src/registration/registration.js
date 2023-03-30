import React, { useState } from 'react'
import "./registration.css"
import { useHistory } from 'react-router-dom'
import validation from './validation'


const Registration = () => {
//   let error=JSON.parse(sessionStorage.getItem('user'))
  const history= useHistory();
  const [values, setValues] = useState({

    name: '',
    password: '',
    email:''
    
  })
  const [errors, setError] = useState({})
  
  function handleChange(e) {

    setValues({ ...values, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {

    e.preventDefault();
    setError(validation(values));
    console.log(Object.keys(errors).length)
    
    if(Object.keys(errors).length === 0 ){
      console.log("empty",  Object.keys(errors).length !== 0 )
      console.log(errors)
    }
    else{

      history.push("/Login")

    }
    
  }

  return (
<div>

    <div className='page'>
        
      <form onSubmit={handleSubmit}>
        <div className='cover'>
          <h1>REGISTARTION</h1>
          <input type='text' placeholder='Enter Username' value={values.name} name='name' onChange={handleChange} />
          {errors.name && <p style={{ color: "white", fontSize: "18px" }}> {errors.name}</p>}

          <input type='password' placeholder='Enter Password' value={values.password} name='password' onChange={handleChange} />
          {errors.password && <p style={{ color: "white", fontSize: "18px" }}> {errors.password}</p>}

          <input type='email' placeholder='Enter Email' value={values.email} name='email' onChange={handleChange} />
          {errors.email && <p style={{ color: "white", fontSize: "18px" }}> {errors.email}</p>}
          <button className='login-btn'>Login</button>
        </div>

      </form>
    </div>
  
    </div>
  )
}

export default Registration