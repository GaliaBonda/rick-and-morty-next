import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import ICharacterApi from '../../types/ICharacterApi';

const initialState: ICharacterApi[] = [];

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<ICharacterApi[]>) => {
      return [...state, ...action.payload];
    },
  },
});

export const { update } = charactersSlice.actions;

export default charactersSlice.reducer;
