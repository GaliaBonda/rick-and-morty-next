import React from 'react';
import styled from 'styled-components';
import ITableData from '../common/interfaces/ITableData';
import { StyledTableCell, StyledTableRow } from '../styles/Table.styles';

interface Props {
  row: ITableData;
}

function TableRow({ row }: Props) {
  return (
    <StyledTableRow>
      {row.data.map((item, index) => {
        return (
          <StyledTableCell key={index} data-testid='test-table-cell'>
            {item}
          </StyledTableCell>
        );
      })}
    </StyledTableRow>
  );
}

export default TableRow;
