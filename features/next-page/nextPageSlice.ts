import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const nextPageSlice = createSlice({
  name: 'next-page',
  initialState,
  reducers: {
    getNextPage: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { getNextPage } = nextPageSlice.actions;

export default nextPageSlice.reducer;
