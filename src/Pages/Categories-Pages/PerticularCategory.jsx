import React, { useContext } from "react";
import { cartContext } from "../../Context";

import { useParams } from "react-router";
import PerticularCategoryShow from "./PerticularCategoryShow";

const PerticularCategory = () => {
  const { products, handleOnClick } = useContext(cartContext);
  const params = useParams();
  const menClothing = products.filter((curr) => {
    return curr.category === `${params.category}`;
  });

  return (
    <>
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
    </>
  );
};

export default PerticularCategory;
