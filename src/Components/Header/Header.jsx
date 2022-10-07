import React,{useContext} from "react";
import "./Header.css";
import { BsCart2 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { productContaxt } from "../../App";
import { cartContext } from "../../Context";

const Header = () => {
  const {totalItem} = useContext(cartContext)
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-bar" >
        <div className="nav-name" >
        <Link to="/"><img src="/assets/NSLogo.png" alt="" /></Link>
          
        </div>

        <div className="nav-links">
          <Link to="/">HOME</Link>
          <a href="#">ABOUT</a>
          <Link to="/products">PRODUCT</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to='/login'><button>LogIn</button> </Link>
          
         
          
          <div className="cart">
            <Link to="/cart">
              <BsCart2 />
              <p>{totalItem}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
