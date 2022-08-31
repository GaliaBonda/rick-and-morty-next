import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { sagaActions } from '../../store/sagas';
import Nav from '../../components/Nav';
import CharacterView from '../../components/CharacterView';
import ICharacterApi from '../../common/interfaces/ICharacterApi';
import api from '../../api/api';
import IResponse from '../../common/interfaces/IResponse';

interface Paths {
  params: {
    character: string;
  };
}

interface Props {
  character: ICharacterApi;
}

export const getStaticPaths = async () => {
  // const promises = [api.get('/character')];
  // for (let i = 2; i <= 42; i++) {
  //   promises.push(api.get('/character/?page=' + i));
  // }
  // let allCharacters: ICharacterApi[] = [];
  // try {
  //   const data = await Promise.all(promises);
  //   data.forEach((item) => {
  //     allCharacters = [...allCharacters, ...item.data.results];
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  const charactersIds: number[] = [];
  for (let i = 1; i < 827; i++) {
    charactersIds.push(i);
  }
  let allCharacters: ICharacterApi[] = [];
  try {
    allCharacters = await api.get('/character/' + charactersIds.toString());
  } catch (error) {
    console.log(error);
  }

  const paths = allCharacters.map((character) => ({
    params: { character: `${character.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: Paths) => {
  const character = await api.get(`/character/${params.character}`);
  return { props: { character } };
};

const Character: FC<Props> = ({ character }) => {
  // const router = useRouter();
  // const characterId = router.query.character as string;

  // const characters = useSelector((state: RootState) => state.characters);
  // const character = useSelector((state: RootState) => state.character);
  const { name, status, species, gender, image, id } = character;

  const links = [
    { link: '/', title: 'Main' },
    { link: '/statistics', title: 'Statistics' },
    { link: '/statistics/episodes', title: 'Episodes' },
    { link: '/statistics/locations', title: 'Locations' },
  ];

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!characters.find((item) => item.id === Number(characterId))) {
  //     dispatch({ type: sagaActions.GET_CHARACTER_SAGA, payload: characterId });
  //   }
  // }, []);

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
