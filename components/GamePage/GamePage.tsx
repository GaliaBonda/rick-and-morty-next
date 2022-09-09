import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledHeader } from '../../assets/Global.styles';
import { RootState } from '../../store/configureStore';
import { sagaGameActions } from '../../store/game/game.saga';
import getRandomBetween from '../../utils/helpers/getRandomBetween';
import { Modal } from '../Modal/Modal';
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
  const gameMode = useSelector((state: RootState) => state.game.gameMode);
  const quiz = useSelector(
    (state: RootState) => state.game.quizes[state.game.quizes.length - 1]
  );
  const congratsShown = useSelector(
    (state: RootState) => state.game.congratsShown
  );
  const dispatch = useDispatch();

  const changeGameMode = () => {
    if (gameMode) {
      dispatch({ type: sagaGameActions.STOP_GAME_SAGA });
    } else {
      dispatch({ type: sagaGameActions.START_GAME_SAGA });
      if (quiz.result) {
        getNextQuiz();
      }
    }
  };

  const getNextQuiz = () => {
    const random = getRandomBetween(0, 826);
    dispatch({ type: sagaGameActions.UPDATE_QUIZ_SAGA, payload: random });
  };

  const restartGame = (restart: boolean) => {
    dispatch({ type: sagaGameActions.HIDE_CONGRATS_SAGA });
    if (!restart) {
      dispatch({ type: sagaGameActions.STOP_GAME_SAGA });
    }
  };
  return (
    <>
      <Nav links={links} />
      <StyledDiv>
        <StyledHeader>Rick and Morty quizzz</StyledHeader>

        <Starter
          title={!gameMode ? 'Start' : 'Stop'}
          clickHandler={changeGameMode}
          start={!gameMode}
        />
        {gameMode && (
          <Quiz
            type={quiz.type}
            question={quiz.question}
            image={quiz.image}
            id={quiz.id}
            answer={quiz.answer}
            nextQuiz={getNextQuiz}
            result={quiz.result}
          />
        )}
      </StyledDiv>
      {/* {congratsShown && <Modal />} */}
      {congratsShown && (
        <Modal
          title='Congrats! You won! Wanna go on?'
          acceptHandler={() => restartGame(true)}
          refuseHandler={() => restartGame(false)}
        />
      )}
    </>
  );
};
