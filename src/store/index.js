import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "/src/store/modules/newsSlice.js";
import categoriesReducer from "/src/store/modules/categoriesSlice.js";

const store = configureStore({
  reducer: {
    news: newsReducer,
    categories: categoriesReducer,
  },
});

export default store;
