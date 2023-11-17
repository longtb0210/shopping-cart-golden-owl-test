import React from "react";
import classes from "./CardItem.module.scss";
import ic_nike from "../../assets/nike.png";

const CardItem = props => {
  return (
    <div
      className={`${classes["container__card-content"]} ${classes["m-right"]}`}
    >
      <div className={classes["container__card-content-heading"]}>
        <img src={ic_nike} alt="nike" />
        <div className={classes["flex-items"]}>
          <p>{props.title}</p>
          <p>{props.price ? "$" + props.price : ""}</p>
        </div>
      </div>
      <div className={classes["container__card-content-items"]}>
        {props.children}
      </div>
    </div>
  );
};

export default CardItem;
