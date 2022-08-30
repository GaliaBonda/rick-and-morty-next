import styled from 'styled-components';

interface StyleProps {
  $active?: boolean;
}
export const StyledLink = styled.a.attrs((props: StyleProps) => ({
  $active: props.$active,
}))`
  flex: 0 1 45%;
  color: ${(props) => (props.$active ? 'black' : 'white')};
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  row-gap: 3em;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => (props.$active ? 'white' : 'inherit')};
  &:hover {
    transform: scale(1.06);
  }
  &:active,
  &:focus {
    box-shadow: none;
  }
`;
export const StyledHeading = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;
export const StyledImage = styled.img`
  border-radius: 20px;
  width: 90%;
  flex: 0 1 90%;
`;
