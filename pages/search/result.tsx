import React, { FC } from 'react';
import { SearchResult } from '../../components/SearchResult/SearchResult';
import { wrapper } from '../../store/configureStore';
import requestCharacters from '../../api/characters/characters-request';
import ICharacterApi from '../../types/ICharacterApi';
import { setSearchResult } from '../../store/searchResult/searchResult.slice';
import { Nav } from '../../components/Nav/Nav';
import { EmptyResult } from '../../components/EmptyResult/EmptyResult';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const testResult = new URLSearchParams(
      context.query as unknown as URLSearchParams
    ).toString();

    const foundCharacters = await requestCharacters.getFilteredCharacters(
      testResult
    );
    if (foundCharacters && foundCharacters.length) {
      store.dispatch(setSearchResult(foundCharacters));
      return { props: { result: foundCharacters, empty: false } };
    } else {
      return { props: { result: [], empty: true } };
    }
  }
);

const ResultPage: FC<{ result: ICharacterApi[] } & { empty: boolean }> = ({
  result,
  empty = false,
}) => {
  const links = [
    { link: '/', title: 'Main' },
    { link: '/statistics', title: 'Statistics' },
    { link: '/statistics/episodes', title: 'Episodes' },
    { link: '/statistics/locations', title: 'Locations' },
    { link: '/search', title: 'Search' },
    { link: '/game', title: 'Game' },
  ];
  return (
    <>
      <Nav links={links} />
      {empty ? <EmptyResult /> : <SearchResult characters={result} />}
    </>
  );
};

export default ResultPage;
