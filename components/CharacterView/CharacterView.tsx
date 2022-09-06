import React, { FC } from 'react';
import {
  FlexDiv,
  StyledDiv,
  StyledHeading,
  StyledImg,
} from './CharacterView.styles';
import ICharacterApi from '../../types/ICharacterApi';
import { CharacterInfo } from '../CharacterInfo/CharacterInfo';

export const CharacterView: FC<ICharacterApi> = ({
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
        <StyledImg src={image} alt='character image'></StyledImg>
        <CharacterInfo gender={gender} species={species} status={status} />
      </StyledDiv>
    </FlexDiv>
  );
};
