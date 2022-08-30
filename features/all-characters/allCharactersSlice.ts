import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import ICharacterApi from '../../common/interfaces/ICharacterApi';

const initialState: ICharacterApi[] = [];

export const allCharactersSlice = createSlice({
  name: 'all-characters',
  initialState,
  reducers: {
    getAll: (state, action: PayloadAction<ICharacterApi[]>) => {
      return [...action.payload];
    },
  },
});

export const { getAll } = allCharactersSlice.actions;

export default allCharactersSlice.reducer;
