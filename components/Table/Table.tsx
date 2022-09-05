import React, { FC } from 'react';
import { StyledTable, StyledTableBody } from './Table.styles';
import ITableData from '../../types/ITableData';
import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';

interface Props {
  header: string[];
  rows: ITableData[];
  changeSort: (desc: boolean, column: number) => void;
}

const Table: FC<Props> = ({ header, rows, changeSort }) => {
  return (
    <StyledTable>
      <TableHead header={header} changeSort={changeSort} />
      <StyledTableBody>
        {rows.map((row) => {
          return <TableRow row={row} key={row.id} />;
        })}
      </StyledTableBody>
    </StyledTable>
  );
};

export default Table;
