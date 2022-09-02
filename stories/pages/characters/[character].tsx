import React, { FC } from 'react';
import Nav from '../../../components/Nav';
import CharacterView from '../../../components/CharacterView';
import ICharacterApi from '../../../common/interfaces/ICharacterApi';
import api from '../../../api/api';
import getAllData from '../../../common/utils/getAllData';
import { wrapper } from '../../../store/store';

interface Props {
  character: ICharacterApi;
}

export const getStaticPaths = async () => {
  const allCharacters = await getAllData('/character');
  const paths = allCharacters.map((character) => ({
    params: { character: `${character.id}` },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = wrapper.getStaticProps(() => async (context) => {
  const character = await api.get(`/character/${context.params?.character}`);
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
