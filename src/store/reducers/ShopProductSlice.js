import { createSlice } from "@reduxjs/toolkit";
import { cardLocal } from "../../utils/localStorage";

export const shopProductSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    initProduct: (state, action) => {
      const data = action.payload;
      const getCards = cardLocal.getCard() ?? []; //Get product list on local storage

      data.forEach(e => {
        const idx = getCards.findIndex(item => item?.id === e?.id);

        state.push({ ...e, inCart: idx >= 0 });
      });
    },
    updateStatusProduct: (state, action) => {
      const { id, status } = action.payload;
      const idx = state.findIndex(e => e?.id === id);

      if (idx >= 0) state[idx].inCart = status;
    },
  },
});

export const { initProduct, updateStatusProduct } = shopProductSlice.actions;

export const selectProduct = state => state.products;

export default shopProductSlice.reducer;
