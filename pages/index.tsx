import { FC, useEffect, useRef, useState } from 'react';
import Nav from '../components/Nav';
import React from 'react';

import {
  MainDiv,
  StyledDiv,
  StyledHeading,
  StyledList,
} from '../styles/Main.styles';
import Character from '../components/Character';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import ICharacterApi from '../common/interfaces/ICharacterApi';
import { sagaActions } from '../store/sagas';
import { RootState } from '../store/store';
import isElementInViewport from '../common/utils/isElementInViewport';
import { useRouter } from 'next/router';
import api from '../api/api';
import IResponse from '../common/interfaces/IResponse';
import { getNextPage } from '../features/next-page/nextPageSlice';
import { update } from '../features/characters/charactersSlice';
import { GetServerSideProps } from 'next';

interface Props {
  characters: ICharacterApi[];
  nextPage: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  let characters: ICharacterApi[] = [];
  let nextPage = '';
  try {
    const data: IResponse<ICharacterApi> = await api.get('/character');
    characters = data.results;
    nextPage = data.info.next;
  } catch (error) {
    console.log(error);
  }
  return { props: { characters, nextPage } };
};

const Main: FC<Props> = ({ characters, nextPage }) => {
  const links = [
    { link: 'statistics', title: 'Statistics' },
    { link: 'statistics/episodes', title: 'Episodes' },
    { link: 'statistics/locations', title: 'Locations' },
  ];

  const [bottomHit, setBottomHit] = useState(false);
  const [loaderShown, setLoaderShown] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const storeCharacters: ICharacterApi[] = useSelector(
    (state: RootState) => state.characters
  );
  const storeNextPage = useSelector((state: RootState) => state.nextPage);
  const router = useRouter();

  const goToCharacter = (id: number) => {
    router.push('characters/' + id.toString());
  };

  useEffect(() => {
    if (!storeCharacters.length) {
      dispatch(update(characters));
      dispatch(getNextPage(nextPage));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isElementInViewport(bottomRef.current) && !bottomHit) {
        setBottomHit(true);
        setLoaderShown(true);
        window.removeEventListener('scroll', handleScroll);
        setBottomHit(false);
        dispatch({
          type: sagaActions.ADD_CHARACTERS_SAGA,
          payload: storeNextPage,
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [storeNextPage, bottomHit]);

  useEffect(() => {
    setLoaderShown(false);
  }, [characters.length]);

  return (
    <MainDiv>
      <Nav links={links} />
      <StyledHeading>Rick and Morty characters</StyledHeading>
      <StyledList>
        {storeCharacters.map((item) => {
          return (
            <Character
              key={item.id}
              name={item.name}
              id={item.id}
              image={item.image}
              clickHandler={goToCharacter}
            />
          );
        })}
      </StyledList>
      <StyledDiv ref={bottomRef} data-testid='test-scroll-load'>
        {loaderShown && <Loader />}
      </StyledDiv>
    </MainDiv>
  );
};

export default Main;
