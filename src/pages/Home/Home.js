import React, { useEffect } from "react";

import classes from "./Home.module.scss";

import CardItem from "../../components/CardItem/CardItem";
import ProductsItem from "../../components/ProductItem/ProductItem";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";

import { useSelector, useDispatch } from "react-redux";
import {
  selectProduct,
  initProduct,
} from "../../store/reducers/ShopProductSlice";
import { selectProductCard } from "../../store/reducers/ShopCardSlice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const productInCart = useSelector(selectProductCard);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/shoes.json");
        const result = await response.json();
        dispatch(initProduct(result.shoes));
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <CardItem title="Our Products">
        {products.map((item, index) => (
          <ProductsItem key={item.id} data={item} />
        ))}
      </CardItem>
      <CardItem title="Your card" price={productInCart.totalPrice.toFixed(2)}>
        {productInCart.totalPrice === 0
          ? "Your cart is empty"
          : productInCart.list.map(item => (
              <ShoppingCartItem key={item.id} data={item} />
            ))}
      </CardItem>
    </div>
  );
};

export default Home;
