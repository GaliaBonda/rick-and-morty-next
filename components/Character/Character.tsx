import React, { FC } from 'react';
import ICharacter from '../../types/ICharacter';
import { StyledImg, StyledDiv, StyledParagraph } from './Character.styles';

interface Props extends ICharacter {
  clickHandler: (id: number) => void;
}

export const Character: FC<Props> = ({ image, name, id, clickHandler }) => {
  return (
    <StyledDiv onClick={() => clickHandler(id)} data-testid='test-character'>
      {name && <StyledParagraph>{name}</StyledParagraph>}
      <StyledImg src={image} />
    </StyledDiv>
  );
};
