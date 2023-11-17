import React, { useState } from "react";
import classes from "./ProductItem.module.scss";
import ic_check from "../../assets/check.png";

const ProductsItem = ({ data }) => {
  const [active, setActive] = useState(false);

  const addItem = () => setActive(!active);
  return (
    <div className={classes.prod__container}>
      <div
        className={classes["prod__container-img"]}
        style={{ backgroundColor: data.color }}
      >
        <img src={data.image} alt="none" />
      </div>
      <div className={classes["prod__container-name"]}>{data.name}</div>
      <div className={classes["prod__container-des"]}>{data.description}</div>
      <div className={classes["prod__container-custom"]}>
        <div className={classes["prod__container-custom-price"]}>
          ${data.price}
        </div>
        <button
          className={`${
            classes[active ? "prod__container-custom-btn-hidden" : ""]
          }
            ${classes["prod__container-custom-btn"]}`}
          onClick={addItem}
        >
          ADD TO CARD
        </button>
        <div
          className={`${
            classes[active ? "" : "prod__container-custom-check-hidden"]
          } ${classes["prod__container-custom-check"]}`}
        >
          <img src={ic_check} alt="none" />
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
