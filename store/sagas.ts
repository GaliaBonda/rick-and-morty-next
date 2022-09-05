import { AnyAction } from '@reduxjs/toolkit';
import { put, call, all, takeLatest, delay } from 'redux-saga/effects';
import api from '../api/api';
import { update, add } from './characters/characters.slice';
import { getNextPage } from './nextPage/nextPage.slice';
import ICharacterApi from '../types/ICharacterApi';
import IResponse from '../types/IResponse';

export const sagaActions = {
  UPDATE_CHARACTERS_SAGA: 'UPDATE_CHARACTERS_SAGA',
  ADD_CHARACTERS_SAGA: 'ADD_CHARACTERS_SAGA',
  GET_CHARACTER_SAGA: 'GET_CHARACTER_SAGA',
  GET_ALL_CHARACTERS_SAGA: 'GET_ALL_CHARACTERS_SAGA',
  UPDATE_LOCATIONS_SAGA: 'UPDATE_LOCATIONS_SAGA',
};

export function* updateCharacters() {
  try {
    const data: IResponse<ICharacterApi> = yield call(() =>
      api.get('/character')
    );
    yield put(getNextPage(data.info.next));

    yield put(update(data.results));
  } catch (error) {
    console.log(error);
  }
}

function* watchUpdateCharacters() {
  yield takeLatest(sagaActions.UPDATE_CHARACTERS_SAGA, updateCharacters);
}

function* addCharacters(action: AnyAction) {
  yield delay(2000);
  try {
    const data: IResponse<ICharacterApi> = yield call(() =>
      api.get(action.payload)
    );
    yield put(getNextPage(data.info.next));
    yield put(add(data.results));
  } catch (error) {
    console.log(error);
  }
}

function* watchAddCharacters() {
  yield takeLatest(sagaActions.ADD_CHARACTERS_SAGA, addCharacters);
}

export default function* rootSaga() {
  yield all([watchUpdateCharacters(), watchAddCharacters()]);
}
