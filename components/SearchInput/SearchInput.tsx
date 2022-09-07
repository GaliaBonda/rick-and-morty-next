import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { StyledDiv, StyledInput, StyledLabel } from './SearchInput.styles';

interface Props {
  name: string;
  id: string;
}

export const SearchInput: FC<Props> = ({ name, id }) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <StyledDiv>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>

      <StyledInput
        id={id}
        name={name}
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
    </StyledDiv>
  );
};
