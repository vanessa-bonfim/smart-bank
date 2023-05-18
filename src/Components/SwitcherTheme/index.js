import React from "react";
import ThemeOn from "assets/images/themeOn.svg";
import ThemeOff from "assets/images/themeOff.svg";
import { Icon } from "Components/UI";

const light = <Icon src={ThemeOn} alt="Tema Claro" />
const dark = <Icon src={ThemeOff} alt="Tema Escuro" />

const SwitcherTheme = ({theme}) => (theme ? dark : light)

export default SwitcherTheme;