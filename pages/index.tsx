import React, { FC } from 'react';
import { wrapper } from '../store/configureStore';
import { setNextPage } from '../store/nextPage/nextPage.slice';
import { update } from '../store/characters/characters.slice';
import { MainPage } from '../components/MainPage/MainPage';
import requestCharacters from '../api/characters/characters-request';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { characters, nextPage } = await requestCharacters.getCharacters();
    store.dispatch(update(characters));
    store.dispatch(setNextPage(nextPage));
    return { props: { characters, nextPage } };
  }
);

const Main: FC = () => {
  return <MainPage />;
};

export default Main;
