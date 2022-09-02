import React, { FC } from 'react';
import ICharacterApi from '../../../common/interfaces/ICharacterApi';
import { wrapper } from '../../../store/store';
import api from '../../../api/api';
import IResponse from '../../../common/interfaces/IResponse';
import { getNextPage } from '../../../features/next-page/nextPageSlice';
import { update } from '../../../features/characters/charactersSlice';
import MainPage from '../../../components/MainPage';

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
