import {
  AnyAction,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  PreloadedState,
  Reducer,
  Store,
} from '@reduxjs/toolkit';
import { PropsWithChildren } from 'react';
import charactersReducer from '../../features/characters/charactersSlice';
import nextPageReducer from '../../features/next-page/nextPageSlice';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { RenderOptions } from '@testing-library/react';
import { RootState } from '../../store/store';
import createSagaMiddleware from 'redux-saga';
import saga, { sagaActions } from '../../store/sagas';
import { HYDRATE } from 'next-redux-wrapper';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: Store;
}
let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

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

export const testStore = configureStore({
  reducer,
  preloadedState: {},
  middleware,
});
sagaMiddleware.run(saga);
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = testStore,
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  store.dispatch({ type: sagaActions.UPDATE_CHARACTERS_SAGA });
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
