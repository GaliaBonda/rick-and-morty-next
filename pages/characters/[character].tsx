import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { sagaActions } from '../../store/sagas';
import Nav from '../../components/Nav';
import CharacterView from '../../components/CharacterView';

const Character: FC = () => {
  const router = useRouter();
  const characterId = router.query.character as string;

  const characters = useSelector((state: RootState) => state.characters);
  const character = useSelector((state: RootState) => state.character);
  const { name, status, species, gender, image, id } =
    characters.find((item) => item.id === Number(characterId)) || character;

  const links = [
    { link: '/', title: 'Main' },
    { link: '/statistics', title: 'Statistics' },
    { link: '/statistics/episodes', title: 'Episodes' },
    { link: '/statistics/locations', title: 'Locations' },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    if (!characters.find((item) => item.id === Number(characterId))) {
      console.log(characterId);

      dispatch({ type: sagaActions.GET_CHARACTER_SAGA, payload: characterId });
    }
  }, []);

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
