import React, { FC } from 'react';
import { Nav } from '../../components/Nav/Nav';
import { CharacterView } from '../../components/CharacterView/CharacterView';
import { wrapper } from '../../store/configureStore';
import ICharacterApi from '../../types/ICharacterApi';
import requestCharacters from '../../api/characters/characters-request';

interface Props {
  character: ICharacterApi;
}

export const getStaticPaths = async () => {
  const allCharacters = await requestCharacters.getAllCharacters();
  const paths = allCharacters.map((character) => ({
    params: { character: `${character.id}` },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = wrapper.getStaticProps(() => async (context) => {
  const character = await requestCharacters.getCharacter(
    context.params?.character
  );
  return { props: { character } };
});

const Character: FC<Props> = ({ character }) => {
  const { name, status, species, gender, image, id } = character;

  const links = [
    { link: '/', title: 'Main' },
    { link: '/statistics', title: 'Statistics' },
    { link: '/statistics/episodes', title: 'Episodes' },
    { link: '/statistics/locations', title: 'Locations' },
  ];

  return (
    <div>
      <Nav links={links} />
      <CharacterView
        id={id}
        name={name}
        status={status}
        species={species}
        gender={gender}
        image={image}
      />
    </div>
  );
};

export default Character;
