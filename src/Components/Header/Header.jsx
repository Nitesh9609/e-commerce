import React,{useContext} from "react";
import "./Header.css";
import { BsCart2 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { productContaxt } from "../../App";

const Header = () => {
  const {totalItem} = useContext(productContaxt)
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-bar">
        <div className="nav-name">
          <span className="first-name">NITESH</span>
          <span className="last-name">STORE</span>
        </div>

        <div className="nav-links">
          <Link to="/">HOME</Link>
          <a href="#">ABOUT</a>
          <Link to="/products">PRODUCT</Link>

          <a href="#">CONTACT</a>
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
