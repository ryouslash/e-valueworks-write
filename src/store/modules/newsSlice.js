// src/slices/newsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "/src/api/newtapi.js"; // Newt API クライアント

// 記事情報を非同期で取得する Thunk
export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await client.getContents({
    appUid: "news",
    modelUid: "article",
    order: "-createdAt",
  });
  return response.items;
});

// スライスの作成
const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [], // 記事データ
    status: "idle", // 状態 (idle, loading, succeeded, failed)
    error: null, // エラー情報
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
