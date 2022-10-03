import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {

  const navigate = useNavigate()
  return (
    <>
      <div className="about">
        <div className="welcome">
          <div className="welcome-title">
            <h4>WELCOME TO</h4>
            <h1>Nitesh Store</h1>
          </div>
          <div className="welcome-note">
            <p>
              Show the most important benefits of using your product. Remind
              your users why they decided to sign up and how you can help them
              achieve their goals.
            </p>
          </div>
          <div className="welcome-button">
            <button onClick={() => navigate('./products')}>SHOP NOW</button>
            
          </div>
        </div>
        {/* <div className="image-back"/> */}
        <div className="welcome-img">
            <img src="assets/welcome-image2.jpg" alt="img" />
        </div>
        

        
      </div>
    </>
  );
};

export default About;
