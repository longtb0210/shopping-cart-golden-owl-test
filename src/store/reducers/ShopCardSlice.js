import { createSlice } from "@reduxjs/toolkit";
import { cardLocal } from "../../utils/localStorage";

export const shopCartSlice = createSlice({
  name: "carts",
  initialState: {
    list: cardLocal.getCard() ?? [],
    totalPrice: cardLocal.getTotalPrice() ?? 0,
  },
  reducers: {
    addNewProduct: (state, action) => {
      const data = action.payload;

      state.list.push({ ...data, amount: 1 });

      //Re-caculate total price of products
      state.totalPrice += data?.price;

      //Update data to local storage
      cardLocal.updateCard(state.list, state.totalPrice);
    },
    updateProduct: (state, actions) => {
      const { amount, id } = actions.payload;
      const idx = state.list.findIndex(item => item.id === id);

      if (idx >= 0) {
        const quantityChanged = amount - state.list[idx].amount;

        //Re-caculate total price of products
        state.totalPrice += quantityChanged * state.list[idx].price;
        state.totalPrice = Math.max(0, state.totalPrice);

        state.list[idx].amount += quantityChanged; //Change amount of product

        //Update data to local storage
        cardLocal.updateCard(state.list, state.totalPrice);
      }
    },
    removeProduct: (state, actions) => {
      const removeProduct = actions.payload;
      const idx = state.list.findIndex(item => item.id === removeProduct.id);

      if (idx >= 0) {
        const amount = state.list[idx].amount;

        //Re-caculate total price of products
        state.totalPrice = Math.max(
          0,
          state.totalPrice - removeProduct.price * amount
        );

        //Remove element
        state.list.splice(idx, 1);

        //Update data to local storage
        cardLocal.updateCard(state.list, state.totalPrice);
      }
    },
  },
});

export const { addNewProduct, updateProduct, removeProduct } =
  shopCartSlice.actions;

export const selectProductCard = state => state.carts;

export default shopCartSlice.reducer;
