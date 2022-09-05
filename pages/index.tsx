import React, { FC } from 'react';
import { wrapper } from '../store/configureStore';
import api from '../api/api';
import { getNextPage } from '../store/nextPage/nextPage.slice';
import { update } from '../store/characters/characters.slice';
import MainPage from '../components/MainPage/MainPage';
import ICharacterApi from '../types/ICharacterApi';
import IResponse from '../types/IResponse';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    let characters: ICharacterApi[] = [];
    let nextPage = '';
    try {
      const data: IResponse<ICharacterApi> = await api.get('/character');
      characters = data.results;
      nextPage = data.info.next;
      store.dispatch(update(characters));
      store.dispatch(getNextPage(nextPage));
    } catch (error) {
      console.log(error);
    }
    return { props: { characters, nextPage } };
  }
);

const Main: FC = () => {
  return <MainPage />;
};

export default Main;
