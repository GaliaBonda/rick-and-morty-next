import type { NextPage } from 'next';
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

const Main: FC = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [bottomHit, setBottomHit] = useState(false);
  const [loaderShown, setLoaderShown] = useState(false);

  const characters: ICharacterApi[] = useSelector(
    (state: RootState) => state.characters
  );
  const nextPage = useSelector((state: RootState) => state.nextPage);

  const links = [
    { link: 'statistics', title: 'Statistics' },
    { link: 'statistics/episodes', title: 'Episodes' },
    { link: 'statistics/locations', title: 'Locations' },
  ];

  const router = useRouter();

  const goToCharacter = (id: number) => {
    router.push('characters/' + id.toString());
  };

  useEffect(() => {
    if (!characters.length)
      dispatch({ type: sagaActions.UPDATE_CHARACTERS_SAGA });
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
          payload: nextPage,
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nextPage, bottomHit]);

  useEffect(() => {
    setLoaderShown(false);
  }, [characters.length]);

  return (
    <MainDiv>
      <Nav links={links} />
      <StyledHeading>Rick and Morty characters</StyledHeading>
      <StyledList>
        {characters.map((item) => {
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
