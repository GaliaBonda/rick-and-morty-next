import React, { FC } from 'react';
import { GamePage } from '../../components/GamePage/GamePage';
import { wrapper } from '../../store/configureStore';
import getRandomBetween from '../../utils/helpers/getRandomBetween';
import charactersApi from '../../api/characters/characters-request';
import IQuiz from '../../types/IQuiz';
import ICharacterApi from '../../types/ICharacterApi';
import { setQuestion } from '../../store/game/game.slice';

interface Props {
  quiz: IQuiz;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const random = getRandomBetween(0, 826);
    const character: ICharacterApi | undefined =
      await charactersApi.getCharacter(random);
    const quiz = {
      type: 'character',
      image: character.image,
      question: 'Name this character',
      id: random,
      answer: character.name,
    };
    store.dispatch(setQuestion(quiz));

    return { props: { quiz } };
  }
);

const Game: FC<Props> = () => {
  return <GamePage />;
};

export default Game;
