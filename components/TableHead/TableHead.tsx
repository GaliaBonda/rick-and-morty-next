import React, { FC, useState } from 'react';
import {
  StyledTableHead,
  StyledHeadRow,
  StyledHeadCell,
  StyledSpan,
} from './TableHead.styles';

interface Props {
  header: string[];
  changeSort: (desc: boolean, column: number) => void;
}

export const TableHead: FC<Props> = ({ header, changeSort }) => {
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
                data-testid='test-span'
              >
                ▼
              </StyledSpan>
              <StyledSpan
                active={!descSorted && activeSort === index ? 'grey' : ''}
                data-testid='test-span'
              >
                ▲
              </StyledSpan>
            </StyledHeadCell>
          );
        })}
      </StyledHeadRow>
    </StyledTableHead>
  );
};
