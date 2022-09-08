import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 3em 5em;
    margin: 0;
    font-family: Aria;
    font-size: 1rem;
    max-width: 1400px;
    margin: 0 auto;
    background-color: #1998cf;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: inherit;
  }
  *:focus {
    border: none;
    outline: none;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  a {
  text-decoration: none;
  cursor: pointer;
  }
  button {
    background-color: transparent;
    cursor: pointer;
    box-shadow: none;
    outline: none;
    border: none;
  }
  button:focus {
    box-shadow: none;
    outline: none;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2em;
  color: white;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;
