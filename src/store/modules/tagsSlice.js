import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "/src/api/newtapi.js"; // Newt API クライアント

// タグ情報を非同期で取得する Thunk
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const response = await client.getContents({
    appUid: "blog",
    modelUid: "tag",
    order: "-createdAt",
  });
  return response.items;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    items: [], // タグデータ
    status: "idle", // 状態 (idle, loading, succeeded, failed)
    error: null, // エラー情報
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default tagsSlice.reducer;