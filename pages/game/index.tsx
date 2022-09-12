import React, { FC } from 'react';
import { GamePage } from '../../components/GamePage/GamePage';
import { wrapper } from '../../store/configureStore';
import getRandomBetween from '../../utils/helpers/getRandomBetween';
import charactersApi from '../../api/characters/characters-request';
import ICharacterApi from '../../types/ICharacterApi';
import { setQuestion } from '../../store/game/game.slice';

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
      result: '',
    };
    store.dispatch(setQuestion(quiz));

    return { props: { quiz } };
  }
);

const Game: FC = () => {
  return <GamePage />;
};

export default Game;
