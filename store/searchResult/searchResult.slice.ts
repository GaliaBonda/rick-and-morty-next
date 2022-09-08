import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import ICharacterApi from '../../types/ICharacterApi';

const initialState: ICharacterApi[] = [];

export const searchResult = createSlice({
  name: 'search-result',
  initialState,
  reducers: {
    setSearchResult: (state, action: PayloadAction<ICharacterApi[]>) => {
      return action.payload;
    },
  },
});

export const { setSearchResult } = searchResult.actions;

export default searchResult.reducer;
