import styled from 'styled-components';

interface StyleProps {
  active?: string;
}

export const StyledTable = styled.table`
  width: 100%;
  rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  background-color: white;
  border-collapse: collapse;
  border-radius: 10px;
`;
export const StyledTableBody = styled.tbody`
  font-size: 1.5em;
  border-radius: 20px;
`;

export const StyledTableHead = styled.thead`
  font-weight: 600;
  font-size: 2em;
  text-align: left;
`;
export const StyledHeadRow = styled.tr`
  border-bottom: 2px solid black;
`;
export const StyledHeadCell = styled.th`
  padding: 2rem 3rem;
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  color: ${(props: StyleProps) => props.active || 'inherit'};
`;

export const StyledTableRow = styled.tr``;

export const StyledTableCell = styled.td`
  padding: 2rem 3rem;
`;
