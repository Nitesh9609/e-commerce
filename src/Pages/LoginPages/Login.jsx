import React,{useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [input, setInput] = useState({})
  const [userData, setUserData] = useState({})
  const navigate = useNavigate()


  const handleOnChange = (event) => {
    const {name, value} = event.target
    setInput({...input, [name]:value})
  }

  const handleOnClick= async () => {
    await axios.post('http://localhost:8080/app/user/user/signin', input)
    .then((res)=> {
    if(res.data){
      localStorage.setItem('user', JSON.stringify(res.data.userDetail.firstName))
      navigate('/')
    }

    })
    .catch((err)=> alert(err))
  }

  return (
    <div className='login-box'>
        <h1>LogIn</h1>
        <TextField sx={{width: '200px', margin: 1}} id="outlined-basic" label="Email" name='email' onChange={handleOnChange} variant="outlined"  type='email' required/>
        <TextField sx={{width: '200px', margin: 1}} id="outlined-basic" label="Password" name='password' onChange={handleOnChange} variant="outlined" type='password' required/>
        <Button sx={{ margin: 2}} onClick={handleOnClick} variant="outlined">Login</Button>
        <Link to='/signUp'><a href="#">Don't Have account??... Click Here</a></Link>
    </div>
  )
}

export default Login