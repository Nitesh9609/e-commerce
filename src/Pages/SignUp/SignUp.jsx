import React from "react";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignUp = () => {
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
          required
        />
        <TextField
          sx={{ width: "200px", margin: 1 }}
          id="outlined-basic"
          label="Laste Name"
          variant="outlined"
          required
        />
      </div>
      <div className="phone-field">
        <TextField
          sx={{ width: "400px", margin: 1 }}
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          type="number"
          required
        />
</div>
        <div className="email-field">
        <TextField
          sx={{ width: "400px", margin: 1 }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          required
        />
        </div>
        
      

      <div className="password-field">
        <TextField
          sx={{ width: "200px", margin: 1 }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          required
        />
        <TextField
          sx={{ width: "200px", margin: 1 }}
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          type="password"
          required
        />
      </div>
      <div className="button-field">
        <Button sx={{ margin: 2 }} variant="outlined">
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
