import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "/src/store/modules/newsSlice.js"; // 後ほど作成するスライスをインポート

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
