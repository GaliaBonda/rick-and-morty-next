import { FC, useEffect, useRef, useState } from 'react';
import React from 'react';
import {
  MainDiv,
  StyledDiv,
  StyledHeading,
  StyledList,
} from './MainPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../../store/sagas';
import { RootState } from '../../store/configureStore';
import isElementInViewport from '../../utils/helpers/isElementInViewport';
import { useRouter } from 'next/router';
import ICharacterApi from '../../types/ICharacterApi';
import { Character } from '../Character/Character';
import { Loader } from '../Loader/Loader';
import { Nav } from '../Nav/Nav';

export const MainPage: FC = () => {
  const links = [
    { link: 'statistics', title: 'Statistics' },
    { link: 'statistics/episodes', title: 'Episodes' },
    { link: 'statistics/locations', title: 'Locations' },
    { link: 'search', title: 'Search' },
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
  }, [storeCharacters.length]);

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
