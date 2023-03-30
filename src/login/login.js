import React, { useState } from 'react'
import "./login.css"
import { useHistory } from 'react-router-dom'
import validation from './validation'
// import Header from '../components/pages/header/header'
// import Footer from '../components/pages/footer/footer'
const Login = () => {
  let register=JSON.parse(sessionStorage.getItem('user'))
  const history= useHistory();
  const [values, setValues] = useState({

    name: '',
    password: ''
  })
  const [errors, setError] = useState({})
  function handleChange(e) {

    setValues({ ...values, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {

    e.preventDefault();
    setError(validation(values));
    
    history.push("/home")
  }

  return (

<>
{/* <Header/> */}
  <div className='page'>
      <form onSubmit={handleSubmit}>
        <div className='cover'>
          <h1>LOGIN</h1>
          <input type='text' placeholder='Enter Username' value={values.name} name='name' onChange={handleChange} />
          {errors.name && <p style={{ color: "white", fontSize: "18px" }}> {errors.name}</p>}
          <input type='password' placeholder='Enter Password' value={values.password} name='password' onChange={handleChange} />
          {errors.password && <p style={{ color: "white", fontSize: "18px" }}> {errors.password}</p>}
          <button className='login-btn'>Login</button>
        </div>

      </form>
    </div>
    {/* <Footer/> */}
    </>

  )
}

export default Login