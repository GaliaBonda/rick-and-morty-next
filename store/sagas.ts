import { AnyAction } from '@reduxjs/toolkit';
import { put, call, all, takeLatest, delay } from 'redux-saga/effects';
import { update } from './characters/characters.slice';
import { setNextPage } from './nextPage/nextPage.slice';
import requestCharacters from '../api/characters/characters-request';
import { gameSaga } from './game/game.saga';

export const sagaActions = {
  UPDATE_CHARACTERS_SAGA: 'UPDATE_CHARACTERS_SAGA',
  ADD_CHARACTERS_SAGA: 'ADD_CHARACTERS_SAGA',
  GET_CHARACTER_SAGA: 'GET_CHARACTER_SAGA',
  GET_ALL_CHARACTERS_SAGA: 'GET_ALL_CHARACTERS_SAGA',
  UPDATE_LOCATIONS_SAGA: 'UPDATE_LOCATIONS_SAGA',
};

export function* updateCharacters() {
  const { characters, nextPage } = yield call(requestCharacters.getCharacters);
  yield put(setNextPage(nextPage));
  yield put(update(characters));
}

function* watchUpdateCharacters() {
  yield takeLatest(sagaActions.UPDATE_CHARACTERS_SAGA, updateCharacters);
}

function* addCharacters(action: AnyAction) {
  yield delay(2000);
  const { characters, nextPage } = yield call(
    requestCharacters.getCharacters,
    action.payload
  );
  yield put(setNextPage(nextPage));
  yield put(update(characters));
}

function* watchAddCharacters() {
  yield takeLatest(sagaActions.ADD_CHARACTERS_SAGA, addCharacters);
}

export default function* rootSaga() {
  yield all([watchUpdateCharacters(), watchAddCharacters(), gameSaga()]);
}
