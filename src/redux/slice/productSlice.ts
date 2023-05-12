import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    search: ``,
    category: ``,
    filter: ``,
    allProducts: [] as any,
  },
  reducers: {
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.category = ``;
    },
    setCategoriesValue: (state, action) => {
      state.category = action.payload;
      state.search = ``;
    },
    setFilterQuery: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { actions: productActions } = productSlice;
export { productSlice };
