import styled from 'styled-components';

export const StyledDiv = styled.div``;

export const StyledButton = styled.button.attrs(
  (props: { inputColor: string }) => ({
    inputColor: props.inputColor || 'rgba(109, 203, 79, 0.8)',
  })
)`
  color: ${(props) => props.inputColor};
  padding: 1.5em;
  row-gap: 3em;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  box-shadow: ${(props) => props.inputColor} 0px 22px 70px 4px,
    ${(props) => props.inputColor} 0px 2px 20px 4px inset;
  font-size: 2em;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 7px solid ${(props) => props.inputColor};

  text-align: center;
  margin: 0 auto;
  text-transform: uppercase;
  width: 150px;
  height: 150px;
  &:hover {
    transform: scale(1.06);
  }
  &:focus,
  &:active {
    outline: 7px solid ${(props) => props.inputColor};
    box-shadow: ${(props) => props.inputColor} 0px 22px 70px 4px,
      ${(props) => props.inputColor} 0px 2px 20px 4px inset;
    border: none;
  }
`;
