import React, { FC } from 'react';
import { wrapper } from '../store/configureStore';
import { getNextPage } from '../store/nextPage/nextPage.slice';
import { update } from '../store/characters/characters.slice';
import { MainPage } from '../components/MainPage/MainPage';
import { Characters } from '../api/characters/Characters';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const charactersApi = new Characters();
    const { characters, nextPage } = await charactersApi.getCharacters();
    store.dispatch(update(characters));
    store.dispatch(getNextPage(nextPage));
    return { props: { characters, nextPage } };
  }
);

const Main: FC = () => {
  return <MainPage />;
};

export default Main;
