import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import ILocation from '../../common/interfaces/ILocation';

const initialState: ILocation[] = [];

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    updateLocations: (state, action: PayloadAction<ILocation[]>) => {
      return [...action.payload];
    },
  },
});

export const { updateLocations } = locationsSlice.actions;

export default locationsSlice.reducer;
