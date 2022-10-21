import React, {useState} from "react";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const SignUp = () => {

  const [input, setInput] = useState({})

  const handleOnChange = (event) => {
      const {name, value} = event.target
      setInput({...input, [name]: value});
  }

  const handleOnClick = async () =>{
      // await axios.post('http://localhost:8080/app/user/user/signup',input)
            await axios.post('https://e-commerce-backend-one.vercel.app/app/user/user/signup',input)

      .then((res) => alert(res.data))
      .catch((err) => alert(err))
  }

  return (
    <div className="signup-box">
      <div className="headind-signup">
        <h1>Sign Up</h1>
      </div>
      <div className="name-field">
        <TextField
          sx={{ width: "200px", margin: 1 }}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name= "firstName"
          onChange={handleOnChange}
          required
        />
        <TextField
          sx={{ width: "200px", margin: 1 }}
          id="outlined-basic"
          label="Laste Name"
          variant="outlined"
          name="lastName"
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="phone-field">
        <TextField
          sx={{ width: "400px", margin: 1 }}
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          name="phoneNo"
          type="number"
          onChange={handleOnChange}
          required
        />
</div>
        <div className="email-field">
        <TextField
          sx={{ width: "400px", margin: 1 }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name='email'
          type="email"
          onChange={handleOnChange}
          required
        />
        </div>
        
      

      <div className="password-field">
        <TextField
          sx={{ width: "200px", margin: 1 }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name='password'
          type="password"
          onChange={handleOnChange}
          required
        />
        <TextField
          sx={{ width: "200px", margin: 1 }}
          id="outlined-basic"
          label="Confirm Password"
          name='confirm password'
          variant="outlined"
          type="password"
          onChange={handleOnChange}
          // required
        />
      </div>
      <div className="button-field">
        <Button sx={{ margin: 2 }} variant="outlined" onClick = {handleOnClick}>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
