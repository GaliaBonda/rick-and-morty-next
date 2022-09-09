import { call, put, take, fork, cancel, all } from 'redux-saga/effects';
import requestCharacters from '../../api/characters/characters-request';
import ICharacterApi from '../../types/ICharacterApi';
import {
  setQuestion,
  setResult,
  toggleGameMode,
  increaseScore,
  showCongrats,
  hideCongrats,
} from './game.slice';
import IQuiz from '../../types/IQuiz';
import { Task } from 'redux-saga';
import { AnyAction } from '@reduxjs/toolkit';

export const sagaGameActions = {
  UPDATE_QUIZ_SAGA: 'UPDATE_QUIZ_SAGA',
  START_GAME_SAGA: 'START_GAME_SAGA',
  STOP_GAME_SAGA: 'STOP_GAME_SAGA',
  SET_GAME_RESULT_SAGA: 'SET_GAME_RESULT_SAGA',
  INCREASE_SCORE_SAGA: 'INCREASE_SCORE_SAGA',
  HIDE_CONGRATS_SAGA: 'HIDE_CONGRATS_SAGA',
  // TOGGLE_GAME_MODE_SAGA: 'TOGGLE_GAME_MODE_SAGA',
};

export function* getNewQuiz(action: AnyAction) {
  const character: ICharacterApi = yield call(
    requestCharacters.getCharacter,
    action.payload
  );
  const newQuiz: IQuiz = {
    type: 'character',
    image: character.image,
    question: 'Name this character',
    answer: character.name,
    id: character.id,
    result: '',
  };
  yield put(setQuestion(newQuiz));
}

export function* updateQuiz() {
  let task: Task;
  while (true) {
    const action: AnyAction = yield take([
      sagaGameActions.UPDATE_QUIZ_SAGA,
      sagaGameActions.STOP_GAME_SAGA,
    ]);
    task = yield fork(getNewQuiz, action);

    if (action.type === sagaGameActions.STOP_GAME_SAGA) yield cancel(task);
  }
}

export function* changeGameMode() {
  while (true) {
    yield take(sagaGameActions.START_GAME_SAGA);
    yield put(toggleGameMode(true));
    yield take(sagaGameActions.STOP_GAME_SAGA);
    yield put(toggleGameMode(false));
  }
}
export function* setGameResult() {
  while (true) {
    const { payload } = yield take(sagaGameActions.SET_GAME_RESULT_SAGA);
    yield put(setResult(payload));
  }
}

export function* increaseGameScore() {
  while (true) {
    yield take(sagaGameActions.INCREASE_SCORE_SAGA);
    yield put(increaseScore());
  }
}

export function* watchThreeCorrectQuizes() {
  while (true) {
    for (let i = 0; i < 3; i++) {
      yield take(sagaGameActions.INCREASE_SCORE_SAGA);
    }
    yield put(showCongrats());
  }
}

export function* hideCongratsModal() {
  while (true) {
    yield take(sagaGameActions.HIDE_CONGRATS_SAGA);
    yield put(hideCongrats());
  }
}

export function* gameSaga() {
  yield all([
    updateQuiz(),
    changeGameMode(),
    setGameResult(),
    increaseGameScore(),
    watchThreeCorrectQuizes(),
    hideCongratsModal(),
  ]);
}
