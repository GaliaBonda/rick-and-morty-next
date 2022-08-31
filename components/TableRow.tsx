import React, { FC } from 'react';
import ITableData from '../common/interfaces/ITableData';
import { StyledTableCell, StyledTableRow } from '../styles/Table.styles';

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
