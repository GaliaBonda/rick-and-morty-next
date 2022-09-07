import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 4em;
`;
export const StyledInput = styled.input`
  flex: 0 1 60%;
  padding: 0.5em;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  text-transform: uppercase;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  &:focus-visible {
    box-shadow: none;
    outline: rgba(0, 0, 0, 0.2);
  }
`;
export const StyledLabel = styled.label`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: white;
  padding: 0.5em;
`;
