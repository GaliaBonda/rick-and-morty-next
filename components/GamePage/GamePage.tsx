import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledHeader } from '../../assets/Global.styles';
import { RootState } from '../../store/configureStore';
import { sagaGameActions } from '../../store/game/game.saga';
import getRandomBetween from '../../utils/helpers/getRandomBetween';
import { Nav } from '../Nav/Nav';
import { Quiz } from '../Quiz/Quiz';
import { Starter } from '../Starter/Starter';
import { StyledDiv } from './GamePage.styles';

export const GamePage: FC = () => {
  const links = [
    { link: '/', title: 'Main' },
    { link: '/statistics', title: 'Statistics' },
    { link: '/statistics/episodes', title: 'Episodes' },
    { link: '/statistics/locations', title: 'Locations' },
    { link: '/search', title: 'Search' },
  ];
  const [gameMode, setGameMode] = useState(false);
  const quiz = useSelector(
    (state: RootState) => state.game[state.game.length - 1]
  );
  const dispatch = useDispatch();

  const toggleGameMode = () => {
    setGameMode((prevState) => !prevState);
  };

  const nextQuiz = () => {
    const random = getRandomBetween(0, 826);
    dispatch({ type: sagaGameActions.UPDATE_QUIZ_SAGA });
  };
  return (
    <>
      <Nav links={links} />
      <StyledDiv>
        <StyledHeader>Rick and Morty quizzz</StyledHeader>

        <Starter
          title={!gameMode ? 'Start' : 'Stop'}
          clickHandler={toggleGameMode}
          start={!gameMode}
        />
        {gameMode && (
          <Quiz
            type={quiz.type}
            question={quiz.question}
            image={quiz.image}
            id={quiz.id}
            answer={quiz.answer}
            nextQuiz={nextQuiz}
          />
        )}
      </StyledDiv>
    </>
  );
};
