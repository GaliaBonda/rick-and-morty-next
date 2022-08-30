import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import ICharacterApi from '../../common/interfaces/ICharacterApi';

const initialState: ICharacterApi = {
  name: '',
  status: '',
  species: '',
  gender: '',
  image: '',
  id: 0,
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    updateCharacter: (state, action: PayloadAction<ICharacterApi>) => {
      return action.payload;
    },
  },
});

export const { updateCharacter } = characterSlice.actions;

export default characterSlice.reducer;
