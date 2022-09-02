import React, { FC } from 'react';
import ITableData from '../../../common/interfaces/ITableData';
import { StyledTable, StyledTableBody } from '../../../styles/Table.styles';
import TableHead from './TableHead';
import TableRow from './TableRow';

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
