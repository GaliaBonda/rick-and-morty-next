import { AnyAction } from '@reduxjs/toolkit';
import { put, call, all, takeLatest, delay } from 'redux-saga/effects';
import { update } from './characters/characters.slice';
import { getNextPage } from './nextPage/nextPage.slice';
import { Characters } from '../api/characters/Characters';

export const sagaActions = {
  UPDATE_CHARACTERS_SAGA: 'UPDATE_CHARACTERS_SAGA',
  ADD_CHARACTERS_SAGA: 'ADD_CHARACTERS_SAGA',
  GET_CHARACTER_SAGA: 'GET_CHARACTER_SAGA',
  GET_ALL_CHARACTERS_SAGA: 'GET_ALL_CHARACTERS_SAGA',
  UPDATE_LOCATIONS_SAGA: 'UPDATE_LOCATIONS_SAGA',
};

export function* updateCharacters() {
  const charactersApi = new Characters();
  const { characters, nextPage } = yield call(() =>
    charactersApi.getCharacters()
  );
  yield put(getNextPage(nextPage));
  yield put(update(characters));
}

function* watchUpdateCharacters() {
  yield takeLatest(sagaActions.UPDATE_CHARACTERS_SAGA, updateCharacters);
}

function* addCharacters(action: AnyAction) {
  yield delay(2000);
  const charactersApi = new Characters();
  const { characters, nextPage } = yield call(() =>
    charactersApi.getCharacters(action.payload)
  );
  yield put(getNextPage(nextPage));
  yield put(update(characters));
}

function* watchAddCharacters() {
  yield takeLatest(sagaActions.ADD_CHARACTERS_SAGA, addCharacters);
}

export default function* rootSaga() {
  yield all([watchUpdateCharacters(), watchAddCharacters()]);
}
