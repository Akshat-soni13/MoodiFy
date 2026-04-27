import React from 'react'
import "../styles/login.scss"
import "../../../shared/sstyles/button.scss"
import FormGroup from '../components/FormGroup' 
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
  return (

    <main className="login-page">
      <div className="form-container"> 
        <h1>Login Page</h1>
          <form>
            <FormGroup type="Email" label="email" placeholder="Enter Email"></FormGroup>
            <FormGroup type="password" label="password" placeholder="Enter Passcode"></FormGroup>
            
            <button >Login</button>
            <p className="Asker">You Don't Have Account ? <Link to="/register" className="st">Register Here</Link></p>

          </form>


      </div>

    </main>

  )
}

export default Login