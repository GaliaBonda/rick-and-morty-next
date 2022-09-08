import styled from 'styled-components';
export const StyledInput = styled.input`
  padding: 0.5em;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  text-transform: uppercase;
  width: 100%;
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
export const StyledParagraph = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: white;
  padding: 0.5em;
  text-align: center;
`;
export const StyledButton = styled.button`
background-color: white;
padding: 0.5em;
display: block;
width: 50%;
font-size: 1.5em;
border-radius: 10px;
text-transform: uppercase;
font-weight: 600;
box-shadow: box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
margin-top: 1em;
&:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}
`;

export const FlexDiv = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 2em;
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  row-gap: 2em;
  flex: 0 1 40%;
`;
