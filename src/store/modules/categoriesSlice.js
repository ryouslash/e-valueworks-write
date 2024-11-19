import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "/src/api/newtapi.js"; // Newt API クライアント

// タグ情報を非同期で取得する Thunk
export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
  const response = await client.getContents({
    appUid: "news",
    modelUid: "category",
    order: "-createdAt",
  });
  return response.items;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    items: [], // タグデータ
    status: "idle", // 状態 (idle, loading, succeeded, failed)
    error: null, // エラー情報
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
