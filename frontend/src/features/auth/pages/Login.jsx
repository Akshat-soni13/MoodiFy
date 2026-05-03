import React, { useState } from 'react'
import "../styles/login.scss"
import "../../../shared/sstyles/button.scss"
import FormGroup from '../components/FormGroup' 
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
const Login = () => {
  const {loading, HandleLogin} = useAuth()
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
 const navigate= useNavigate()

  async function handleSubmit(e)
  {
    e.preventDefault()
    await HandleLogin({email,password})
    navigate("/")
  }

  return (
    <main className="login-page">
      <div className="form-container"> 
        <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
            <FormGroup
            label=""
            placeholder="Enter Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            type="Email"  ></FormGroup>
            <FormGroup
            label=""
            value={password}
            placeholder="Enter password"
            onChange={(e)=> setPassword(e.target.value)}
            type="password"  ></FormGroup>
            <button type="submit" >Login</button>
            <p className="Asker">You Don't Have Account ? <Link to="/register" className="st">Register Here</Link></p>
          </form>
      </div>
    </main>

  )
}

export default Login