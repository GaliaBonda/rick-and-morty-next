import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const nextPageSlice = createSlice({
  name: 'next-page',
  initialState,
  reducers: {
    setNextPage: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setNextPage } = nextPageSlice.actions;

export default nextPageSlice.reducer;
