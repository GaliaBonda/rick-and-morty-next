import React, { FC } from 'react';
import ICharacter from '../../../common/interfaces/ICharacter';
import {
  StyledImg,
  StyledLi,
  StyledParagraph,
} from '../../../styles/Character.styles';

interface Props extends ICharacter {
  clickHandler: (id: number) => void;
}

const Character: FC<Props> = ({ image, name, id, clickHandler }) => {
  return (
    <StyledLi onClick={() => clickHandler(id)} data-testid='test-character'>
      <StyledParagraph>{name}</StyledParagraph>
      <StyledImg src={image} />
    </StyledLi>
  );
};

export default Character;
