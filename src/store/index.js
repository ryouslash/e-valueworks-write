import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "/src/store/modules/newsSlice.js";
import tagsReducer from "/src/store/modules/tagsSlice.js";

const store = configureStore({
  reducer: {
    news: newsReducer,
    tags: tagsReducer,
  },
});

export default store;
