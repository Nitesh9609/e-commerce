import React from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg",
    category: "MENS",
    url: "mens",
  },
  {
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/2/f04c1859-6fd2-401e-886d-1616a36487611564686015480-1.jpg",
    category: "WOMENS",
    url: "womens",
  },
  {
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9969869/2021/3/5/db5019f9-b991-4408-863d-3bf9aa9e16301614930519569StyloBugGirlsTurquoiseBluePrintedFitandFlareDress1.jpg",
    category: "KIDS",
    url: "kids",
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="categoty">
        <div className="category-title">
          <h2>CATEGORIES</h2>
        </div>
        <div className="all-category">
          {data.map((items) => {
            return (
              <div className="all-category-div">
                <div className="cat-button">
                  <button onClick={() => navigate(`category/${items.url}`)}>SHOP NOW FOR {items.category}</button>
                </div>
                <img
                  src={items.image}
                  alt="cat"
                  onClick={() => navigate(`category/${items.url}`)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
