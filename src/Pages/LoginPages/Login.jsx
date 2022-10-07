import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Login = () => {
  return (
    <div className='login-box'>
        <h1>LogIn</h1>
        <TextField sx={{width: '200px', margin: 1}} id="outlined-basic" label="Email" variant="outlined"  type='email' required/>
        <TextField sx={{width: '200px', margin: 1}} id="outlined-basic" label="Password" variant="outlined" type='password' required/>
        <Button sx={{ margin: 2}} variant="outlined">Login</Button>
        <Link to='/signUp'><a href="#">Don't Have account??... Click Here</a></Link>
    </div>
  )
}

export default Login