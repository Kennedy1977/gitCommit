import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = '//api.github.com/repositories/19438/commits';

export const getCommits = createAsyncThunk('commits/getCommits', async () => {
  try {
    const response = await fetch(URL);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
});

const initialState = {
  commits: [],
  total: 0,
  isLoading: true,
};

const commitSlice = createSlice({
  name: 'commit',
  initialState,
  extraReducers: {
    [getCommits.pending]: (state) => {
      state.isLoading = true;
    },
    [getCommits.fulfilled]: (state, action) => {
      state.commits = action.payload;
      state.total = action.payload.length;
      state.isLoading = false;
    },
    [getCommits.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default commitSlice.reducer;
