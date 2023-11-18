import React, { memo } from "react";
import classes from "./ProductItem.module.scss";
import ic_check from "../../assets/check.png";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../store/reducers/ShopCardSlice";
import { updateStatusProduct } from "../../store/reducers/ShopProductSlice";

const ProductsItem = ({ data }) => {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addNewProduct(data));
    dispatch(updateStatusProduct({ id: data.id, status: true }));
  };

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
            classes[data.inCart ? "prod__container-custom-btn-hidden" : ""]
          }
            ${classes["prod__container-custom-btn"]}`}
          onClick={addProductToCart}
        >
          ADD TO CARD
        </button>
        <div
          className={`${
            classes[!data.inCart && "prod__container-custom-check-hidden"]
          } ${classes["prod__container-custom-check"]}`}
        >
          <img src={ic_check} alt="none" />
        </div>
      </div>
    </div>
  );
};

export default memo(ProductsItem);
