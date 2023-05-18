import {
    backgroundLight,
    backgroundDark,
    backgroundTextLight,
    backgroundTextDark,
    contentLight,
    contentDark
  } from 'Components/UI/variaveis';
  
  // Definição do tema claro
  export const lightTheme = {
    body: backgroundLight,
    inside: contentLight,
    text: backgroundTextLight,
    filter: ""
  };
  
  // Definição do tema escuro
  export const darkTheme = {
    body: backgroundDark,
    inside: contentDark,
    text: backgroundTextDark,
    filter: "invert(100%)"
  };
  