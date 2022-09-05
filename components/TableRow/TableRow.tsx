import React, { FC } from 'react';
import { StyledTableCell, StyledTableRow } from './TableRow.styles';
import ITableData from '../../types/ITableData';

interface Props {
  row: ITableData;
}

const TableRow: FC<Props> = ({ row }) => {
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
};

export default TableRow;
