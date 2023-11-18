import React, { useState } from "react";
import classes from "./ShoppingCartItem.module.scss";
import ic_remove from "../../assets/minus.png";
import ic_add from "../../assets/plus.png";
import ic_trash from "../../assets/trash.png";
import { useDispatch } from "react-redux";
import {
  updateProduct,
  removeProduct,
} from "../../store/reducers/ShopCardSlice";
import { updateStatusProduct } from "../../store/reducers/ShopProductSlice";

const ShoppingCardItem = props => {
  const dispatch = useDispatch();
  const [disappear, setDisappear] = useState(false);

  const handleAddProduct = () => {
    dispatch(
      updateProduct({ amount: props.data.amount + 1, id: props.data.id })
    );
  };

  const handleMinusProduct = () => {
    if (props.data.amount - 1 === 0) {
      handleRemoveProduct();
    } else
      dispatch(
        updateProduct({ amount: props.data.amount - 1, id: props.data.id })
      );
  };

  // Remove a item from cart
  const handleRemoveProduct = () => {
    setDisappear(true);
    const interval = setInterval(() => {
      //Update status in prodcuct
      dispatch(updateStatusProduct({ id: props.data.id, status: false }));

      //Remove product from cart
      dispatch(removeProduct(props.data));

      clearInterval(interval);
      setDisappear(false);
    }, 1000);
  };

  return (
    <div
      className={`${classes.container__card} ${
        classes[disappear && "container__card-disappear"]
      }`}
    >
      <div className={classes["container__card-block"]}>
        <div
          className={classes["container__card-block-image"]}
          style={{ backgroundColor: props.data.color }}
        >
          <img src={props.data.image} alt="none" />
        </div>
      </div>
      <div className={classes["container__card-content"]}>
        <div className={classes["container__card-content-name"]}>
          <p>{props.data.name}</p>
        </div>
        <div className={classes["container__card-content-price"]}>
          <p>${props.data.price}</p>
        </div>
        <div className={classes["container__card-content-custom"]}>
          <div className={classes["container__card-content-custom-buy"]}>
            <button
              className={classes["container__card-content-custom-buy-btn"]}
              onClick={handleMinusProduct}
            >
              <img src={ic_remove} alt="none" />
            </button>
            <div
              className={classes["container__card-content-custom-buy-amount"]}
            >
              <p>{props.data.amount}</p>
            </div>
            <button
              className={classes["container__card-content-custom-buy-btn"]}
              onClick={handleAddProduct}
            >
              <img src={ic_add} alt="none" />
            </button>
          </div>
          <div className={classes["container__card-content-custom-delete"]}>
            <button onClick={handleRemoveProduct}>
              <img src={ic_trash} alt="none" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCardItem;
