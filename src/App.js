import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "Components/UI/theme";
import Header from "Components/Header";
import { GlobalStyle } from "Components/GlobalStyle";
import Main from "Components/Main";
import { BtnTheme } from "Components/UI";
import SwitcherTheme from "Components/SwitcherTheme";
import { useState } from "react";

// Função principal do aplicativo
function App() {
  // Estado para controlar o tema (claro ou escuro)
  const [theme, setTheme] = useState(true);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      {/* Aplica o tema global */}
      <GlobalStyle />

      {/* Botão para alternar o tema */}
      <BtnTheme onClick={toggleTheme}>
        <SwitcherTheme theme={theme} />
      </BtnTheme>

      {/* Componente do cabeçalho */}
      <Header />

      {/* Componente principal */}
      <Main />
    </ThemeProvider>
  );
}

export default App;
