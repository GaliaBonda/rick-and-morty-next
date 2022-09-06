import React, { FC } from 'react';
import ICharacter from '../../types/ICharacter';
import { StyledImg, StyledLi, StyledParagraph } from './Character.styles';

interface Props extends ICharacter {
  clickHandler: (id: number) => void;
}

export const Character: FC<Props> = ({ image, name, id, clickHandler }) => {
  return (
    <StyledLi onClick={() => clickHandler(id)} data-testid='test-character'>
      <StyledParagraph>{name}</StyledParagraph>
      <StyledImg src={image} />
    </StyledLi>
  );
};
