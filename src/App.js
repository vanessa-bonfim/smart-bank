import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "Components/UI/theme";
import Header from "Components/Header";
import { GlobalStyle } from "Components/GlobalStyle";
import Main from "Components/Main";
import { BtnTheme } from "Components/UI";
import SwitcherTheme from "Components/SwitcherTheme";
import { useState } from "react";


function App() {
const [theme, setTheme] = useState(true);
const toggleTheme = () => {
  setTheme((theme) => !theme);
}
  return ( 
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BtnTheme onClick={toggleTheme}>
        <SwitcherTheme theme={theme}/>
      </BtnTheme>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
