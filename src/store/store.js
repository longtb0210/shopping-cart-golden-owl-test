import { configureStore } from "@reduxjs/toolkit";
import ShopCardReducer from "./reducers/ShopCardSlice";
import ShopProductSlice from "./reducers/ShopProductSlice";

const rootReducer = {
  carts: ShopCardReducer,
  products: ShopProductSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
