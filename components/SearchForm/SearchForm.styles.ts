import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
`;

export const StyledButton = styled.button`
  background-color: white;
  padding: 1em;
  width: 20%;
  display: block;
  margin: 3em auto;
  font-size: 1.5em;
  border-radius: 15px;
  text-transform: uppercase;
  font-weight: 600;
  box-shadow: box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }
`;
