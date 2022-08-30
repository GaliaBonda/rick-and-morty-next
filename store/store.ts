import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import charactersReducer from '../features/characters/charactersSlice';
import characterReducer from '../features/character/characterSlice';
import allCharactersReducer from '../features/all-characters/allCharactersSlice';
import locationsReducer from '../features/locations/locationsSlice';
import nextPageReducer from '../features/next-page/nextPageSlice';
import saga from './sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    nextPage: nextPageReducer,
    allCharacters: allCharactersReducer,
    character: characterReducer,
    locations: locationsReducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
