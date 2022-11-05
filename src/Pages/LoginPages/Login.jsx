import React,{useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// import { useToast } from '@chakra-ui/react'


const Login = () => {

  const [input, setInput] = useState({})
  const [alert, setAlert] = useState(false)
  const navigate = useNavigate()
  // const toast = useToast()

  const handleOnChange = (event) => {
    const {name, value} = event.target
    setInput({...input, [name]:value})
  }

  const handleOnClick= async () => {
  
    // await axios.post('http://localhost:8080/app/user/user/signin', input)
    await axios.post("https://e-commerce-backend-one.vercel.app/app/user/user/signin", input)
    .then((res)=> { console.log(res.data);

    if(res.data === 'wrong password'){
      console.log("wrong password !!");
      
    }

    if(res.data === 'Please SignUp first !!'){
      console.log('Please sign first');
      
    }
      if(res.data){
      localStorage.setItem('user', JSON.stringify(res.data.userDetail.firstName))
      setTimeout(() => {
        navigate('/')
      }, 1000);

      
    }


    })
    .catch((err)=> err)

    
  }

  return (
    <div className='login-box'>
        <h1>LogIn</h1>
        <TextField sx={{width: '200px', margin: 1}} id="outlined-basic" label="Email" name='email' onChange={handleOnChange} variant="outlined"  type='email' required/>
        <TextField sx={{width: '200px', margin: 1}} id="outlined-basic" label="Password" name='password' onChange={handleOnChange} variant="outlined" type='password' required/>
        <Button sx={{ margin: 2}} onClick={handleOnClick} variant="outlined">Login</Button>
        <Link to='/signUp'><a href="#">Don't Have account??... Click Here</a></Link>
       {alert && <Alert variant="filled" severity="error" onClose={() => setAlert(false)}>
        Wrong Password
        </Alert>}
    </div>
  )
}

export default Login