import { createGlobalStyle } from "styled-components";

// Criação do estilo global
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;
