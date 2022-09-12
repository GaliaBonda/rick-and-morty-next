import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import requestCharacters from '../../api/characters/characters-request';
import { update } from './characters.slice';
import { setNextPage } from '../nextPage/nextPage.slice';
import { AnyAction } from '@reduxjs/toolkit';

export const sagaCharactersActions = {
  UPDATE_CHARACTERS_SAGA: 'UPDATE_CHARACTERS_SAGA',
  ADD_CHARACTERS_SAGA: 'ADD_CHARACTERS_SAGA',
  GET_CHARACTER_SAGA: 'GET_CHARACTER_SAGA',
};

export function* updateCharacters() {
  const { characters, nextPage } = yield call(requestCharacters.getCharacters);
  yield put(setNextPage(nextPage));
  yield put(update(characters));
}

function* watchUpdateCharacters() {
  yield takeLatest(
    sagaCharactersActions.UPDATE_CHARACTERS_SAGA,
    updateCharacters
  );
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
  yield takeLatest(sagaCharactersActions.ADD_CHARACTERS_SAGA, addCharacters);
}

export function* charactersSaga() {
  yield all([watchUpdateCharacters(), watchAddCharacters()]);
}
