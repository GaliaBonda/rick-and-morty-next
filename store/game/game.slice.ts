import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IQuiz from '../../types/IQuiz';

// const initialState: IQuiz[] = [];
interface State {
  quizes: IQuiz[];
  gameMode: boolean;
  score: number;
  congratsShown: boolean;
}
const initialState: State = {
  quizes: [],
  gameMode: false,
  score: 0,
  congratsShown: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    toggleGameMode: (state, action: PayloadAction<boolean>) => {
      state.gameMode = action.payload;
    },
    setQuestion: (state, action: PayloadAction<IQuiz>) => {
      state.quizes.push(action.payload);
    },
    setResult: (state, action: PayloadAction<string>) => {
      if (state.quizes.length)
        state.quizes[state.quizes.length - 1].result = action.payload;
    },
    increaseScore: (state) => {
      state.score++;
    },
    resetScore: (state) => {
      state.score = 0;
    },
    showCongrats: (state) => {
      state.congratsShown = true;
    },
    hideCongrats: (state) => {
      state.congratsShown = false;
    },
  },
});

export const {
  setQuestion,
  setResult,
  toggleGameMode,
  increaseScore,
  resetScore,
  showCongrats,
  hideCongrats,
} = gameSlice.actions;

export default gameSlice.reducer;
