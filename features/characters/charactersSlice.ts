import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import ICharacterApi from '../../common/interfaces/ICharacterApi';

const initialState: ICharacterApi[] = [];

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<ICharacterApi[]>) => {
      return [...action.payload];
    },
    add: (state, action: PayloadAction<ICharacterApi[]>) => {
      return [...state, ...action.payload];
    },
  },
});

export const { update, add } = charactersSlice.actions;

export default charactersSlice.reducer;
