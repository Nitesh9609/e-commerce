import React from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    category: "Men's Clothing",
    url: "men's clothing",
  },
  {
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    category: "Jewelery",
    url: "jewelery",
  },
  {
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    category: "Electronics",
    url: "electronics",
  },
  {
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    category: "Women's Clothing",
    url: "women's clothing",
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
                <img
                  src={items.image}
                  alt="cat"
                  onClick={() => navigate(`category/${items.url}`)}
                />

                <h4>{items.category}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
