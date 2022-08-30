import React, { FC } from 'react';
import ICharacterApi from '../common/interfaces/ICharacterApi';
import {
  FlexDiv,
  StyledDiv,
  StyledHeading,
  StyledImg,
} from '../styles/CharacterView.styles';
import CharacterInfo from './CharacterInfo';

const CharacterView: FC<ICharacterApi> = ({
  name,
  image,
  gender,
  species,
  status,
}) => {
  return (
    <FlexDiv>
      <StyledDiv>
        <StyledHeading>{name}</StyledHeading>
        <StyledImg src={image} alt=''></StyledImg>
        <CharacterInfo gender={gender} species={species} status={status} />
      </StyledDiv>
    </FlexDiv>
  );
};

export default CharacterView;
