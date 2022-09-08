import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IQuestion from '../../types/IQuiz';
import IQuiz from '../../types/IQuiz';

const initialState: IQuiz[] = [];

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setQuestion: (state, action: PayloadAction<IQuestion>) => {
      state.push(action.payload);
    },
    setAnswer: (state, action: PayloadAction<string>) => {
      if (state.length) state[state.length - 1].answer = action.payload;
    },
  },
});

export const { setQuestion, setAnswer } = gameSlice.actions;

export default gameSlice.reducer;
