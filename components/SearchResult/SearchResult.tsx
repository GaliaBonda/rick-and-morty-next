import React, { FC } from 'react';
import ICharacterApi from '../../types/ICharacterApi';
import { CharacterView } from '../CharacterView/CharacterView';
import { StyledDiv, StyledHeader, StyledList } from './SearchResult.styles';

interface Props {
  characters: ICharacterApi[];
}

export const SearchResult: FC<Props> = ({ characters }) => {
  return (
    <StyledDiv>
      <StyledHeader>Search result</StyledHeader>
      <StyledList>
        {characters.map((item) => {
          return (
            <CharacterView
              image={item.image}
              name={item.name}
              id={item.id}
              key={item.id}
              status={item.status}
              species={item.species}
              gender={item.gender}
              big={true}
            />
          );
        })}
      </StyledList>
    </StyledDiv>
  );
};
