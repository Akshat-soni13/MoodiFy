import React from 'react'
import FormGroup from '../components/FormGroup'
import "../styles/register.scss"
import "../../../shared/sstyles/button.scss"
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <main className="register-page">
      <div className="form-container"> 
        <h1>Register Page</h1>
          <form>
            <FormGroup type="text" label="name" placeholder="Enter Name"></FormGroup>
            <FormGroup type="Email" label="email" placeholder="Enter Email"></FormGroup>
            <FormGroup type="password" label="password" placeholder="Enter Passcode"></FormGroup>
            
            <button >Register</button>
            <p className="Asker">You Haven Account ? <Link to="/Login" className="st">Login Here</Link></p>

          </form>


      </div>

    </main>
  )
}

export default Register