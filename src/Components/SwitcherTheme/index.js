import React from "react";
// Importação das imagens dos temas claro e escuro
import ThemeOn from "assets/images/themeOn.svg";
import ThemeOff from "assets/images/themeOff.svg";
// Importação do componente 'Icon' do projeto
import { Icon } from "Components/UI";

// Definição do ícone para o tema claro
const light = <Icon src={ThemeOn} alt="Tema Claro" />;
// Definição do ícone para o tema escuro
const dark = <Icon src={ThemeOff} alt="Tema Escuro" />;

// Componente 'SwitcherTheme'
const SwitcherTheme = ({ theme }) => (theme ? dark : light);

export default SwitcherTheme;
