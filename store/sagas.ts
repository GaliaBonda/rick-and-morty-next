import { all } from 'redux-saga/effects';
import { charactersSaga } from './characters/characters.saga';
import { gameSaga } from './game/game.saga';

export default function* rootSaga() {
  yield all([charactersSaga(), gameSaga()]);
}
