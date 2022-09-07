import React, { FC } from 'react';
import { SearchResult } from '../../components/SearchResult/SearchResult';
import { wrapper } from '../../store/configureStore';
import requestCharacters from '../../api/characters/characters-request';
import ICharacterApi from '../../types/ICharacterApi';
import { setSearchResult } from '../../store/searchResult/searchResult.slice';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const testResult = new URLSearchParams(
      context.query as unknown as URLSearchParams
    ).toString();
    // const testResult = context.query.toString();
    // console.log(testResult);

    const filteredCharacters = await requestCharacters.getFilteredCharacters(
      '?' + testResult
    );
    if (filteredCharacters && filteredCharacters.length) {
      store.dispatch(setSearchResult(filteredCharacters));
      return { props: { result: filteredCharacters[0], empty: false } };
    } else {
      return { props: { result: { name: '', image: '', id: 0 }, empty: true } };
    }
  }
);

const ResultPage: FC<{ result: ICharacterApi } & { empty: boolean }> = ({
  result,
  empty = false,
}) => {
  {
    if (empty) return <div>Empty search</div>;
  }
  return (
    <SearchResult name={result.name} image={result.image} id={result.id} />
  );
};

export default ResultPage;
