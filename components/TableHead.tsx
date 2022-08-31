import React, { useState } from 'react';
import {
  StyledTableHead,
  StyledHeadRow,
  StyledHeadCell,
  StyledSpan,
} from '../styles/Table.styles';

interface Props {
  header: string[];
  changeSort: (desc: boolean, column: number) => void;
}

function TableHead({ header, changeSort }: Props) {
  const [descSorted, setDescSorted] = useState(true);
  const [activeSort, setActiveSort] = useState(1);
  const handleClick = (index: number) => {
    changeSort(descSorted, index);
    setDescSorted((prevState) => !prevState);
    setActiveSort(index);
  };
  return (
    <StyledTableHead>
      <StyledHeadRow>
        {header.map((item, index) => {
          return (
            <StyledHeadCell
              key={index}
              onClick={() => handleClick(index)}
              data-testid='test-sorter'
            >
              {item}{' '}
              <StyledSpan
                active={descSorted && activeSort === index ? 'grey' : ''}
              >
                ▼
              </StyledSpan>
              <StyledSpan
                active={!descSorted && activeSort === index ? 'grey' : ''}
              >
                ▲
              </StyledSpan>
            </StyledHeadCell>
          );
        })}
      </StyledHeadRow>
    </StyledTableHead>
  );
}

export default TableHead;
