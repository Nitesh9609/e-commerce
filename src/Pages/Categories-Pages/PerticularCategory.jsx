import React, { useContext } from "react";
import { cartContext } from "../../Context";

import { useParams } from "react-router";
import PerticularCategoryShow from "./PerticularCategoryShow";
import Filter from "../../Components/Filters/Filter";

const PerticularCategory = () => {
  const { filter,products, handleOnClick } = useContext(cartContext);
  const params = useParams();
  const menClothing = products.filter((curr) => {
    return curr.category === `${params.category}`;
  });

  return (
    <>
    {/* <div className="filter">
        <Filter/>
      </div> */}
      <div className="all-products">
        {menClothing.map((curr) => {
          return (
            <PerticularCategoryShow
              items={curr}
              handleOnClick={handleOnClick}
            />
          );
        })}
      </div>

      {/* <div className="all-products">
        { filter.length !==0 ? filter.map((curr) => {
          return <PerticularCategoryShow items={curr} handleOnClick={handleOnClick} />;
        }):
        
        menClothing.map((curr) => {
          return <PerticularCategoryShow items={curr} handleOnClick={handleOnClick} />;
        })}
      </div> */}
    </>
  );
};

export default PerticularCategory;
