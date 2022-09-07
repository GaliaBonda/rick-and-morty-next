import React, { FC } from 'react';
import ICharacter from '../../types/ICharacter';
import { Character } from '../Character/Character';
import { StyledDiv, StyledHeader } from './SearchResult.styles';

export const SearchResult: FC<ICharacter> = ({ name, image, id }) => {
  return (
    <StyledDiv>
      <StyledHeader>Search results</StyledHeader>
      <Character
        clickHandler={() => undefined}
        image={image}
        name={name}
        id={id}
      />
    </StyledDiv>
  );
};
