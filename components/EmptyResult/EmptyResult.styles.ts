import styled from 'styled-components';

export const StyledDiv = styled.div``;
export const StyledParagraph = styled.p`
  font-size: 2em;

  text-align: center;
  margin-bottom: 4em;
  color: white;
`;
export const StyledHeading = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 3em 0;
  color: white;
`;

export const StyledLink = styled.a`
  color: rgba(109, 203, 79, 1);
  padding: 1.5em;
  row-gap: 3em;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  box-shadow: rgba(109, 203, 79, 0.8) 0px 22px 70px 4px,
    rgba(109, 203, 79, 0.8) 0px 2px 20px 4px inset;
  font-size: 2em;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 7px solid rgba(109, 203, 79, 0.5);

  text-align: center;
  margin: 0 auto;
  text-transform: uppercase;
  width: 200px;
  height: 200px;
  &:hover {
    transform: scale(1.06);
  }
  &:active,
  &:focus {
    box-shadow: none;
  }
`;
