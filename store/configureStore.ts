import {
  AnyAction,
  combineReducers,
  createStore,
  Reducer,
  Store,
} from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import charactersReducer from './characters/characters.slice';
import nextPageReducer from './nextPage/nextPage.slice';
import saga from './sagas';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from '@redux-devtools/extension';

const combinedReducer = combineReducers({
  characters: charactersReducer,
  nextPage: nextPageReducer,
});

const reducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE && !state.characters.length) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  (store as SagaStore).sagaTask = sagaMiddleware.run(saga);
  return store;
};

export const wrapper = createWrapper<Store<RootState>>(makeStore);

export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
