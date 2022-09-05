import styled from 'styled-components';

interface StyleProps {
  active?: string;
}

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
