import React from "react";
import classes from "./Home.module.scss";
import ProductsItem from "../../components/ProductItem/ProductItem";
import data from "../../data/shoes.json";
import CardItem from "../../components/CardItem/CardItem";

const Home = () => {
  return (
    <div className={classes.container}>
      <CardItem title="Our Products">
        {data.shoes.map((item, index) => (
          <ProductsItem key={item.id} data={item} />
        ))}
      </CardItem>
      <CardItem title="Your card" price="100" />

      {/* <div className={classes.container__background}></div> */}
    </div>
  );
};

export default Home;
