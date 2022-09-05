import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  column-gap: 4em;
  justify-content: center;
  margin-bottom: 4em;
  position: relative;
`;
export const StyledLink = styled.a`
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

export const StyledBackBtn = styled.button`
  font-size: 2em;
  position: fixed;
  top: 1em;
  left: 0.5em;
  width: 1.5em;
  height: 1.5em;
  svg {
    fill: white;
  }
`;
