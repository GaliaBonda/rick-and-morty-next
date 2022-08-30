import Link from 'next/link';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  column-gap: 4em;
  justify-content: center;
  margin-bottom: 4em;
`;
export const StyledLink = styled(Link)`
  display: block;
  color: white;
  font-size: 1.5em;
  &:hover {
    transform: scale(1.1);
  }
  &:active,
  &:focus {
    box-shadow: none;
  }
`;
