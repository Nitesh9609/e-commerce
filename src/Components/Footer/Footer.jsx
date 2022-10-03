import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandDiscord } from "react-icons/tb";
import { AiFillYoutube,AiOutlineCopyrightCircle } from "react-icons/ai";
import Alert from "@mui/material/Alert";

import "./Footer.css";
const Footer = () => {
  const [subscribeAlert, setSubscribeAlert] = useState(false);
  const handleOnClick = () => {
    setSubscribeAlert(true);
  };
  return (
    <div className="footer">
      <div className="footer-1">
        <div className="footer-note">
          <h3>Nitesh Sharma</h3>
          <p>
            Hello we are glad to have u here thankYou for shopping with us!!!
          </p>
        </div>
        <div className="subscribe">
          <h3>Subscribe to get important update</h3>
          <input type="text" placeholder="YOUR E-MAIL" />
          {/* {subscribeAlert ? (
            <Alert
            sx={{position: "absolute", top: '-10rem' }}
            severity="success" color="info"
              onClose={() => setSubscribeAlert(false)}
            >
              You have been subscribed successfully
            </Alert>
          ) : (
            <button onClick={handleOnClick}>SUBSCRIBE</button>
          )} */}
         <button>SUBSCRIBE</button>

        </div>
        <div className="follow">
          <h3>Follow Us</h3>
          <i>
            <AiFillInstagram />
          </i>
          <i>
            <TbBrandDiscord />
          </i>
          <i>
            <AiFillYoutube />
          </i>
        </div>
        <div className="call">
          <h3>Call Us</h3>
          <p>+91 9319830149</p>
        </div>
      </div>
          <hr/>
        <div className="footer-2">
            
                <p><span><AiOutlineCopyrightCircle/></span> 2022 Nitesh Sharma. All Right Reserved</p>
            
        </div>
    </div>
  );
};

export default Footer;
