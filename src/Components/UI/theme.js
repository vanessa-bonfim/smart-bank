import {
            backgroundLight, 
            backgroundDark,
            backgroundTextLight,
            backgroundTextDark,
            contentLight,
            contentDark
        } from 'Components/UI/variaveis';

export const lightTheme = {
    body: backgroundLight,
    inside: contentLight,
    text: backgroundTextLight,
    filter: "",
};
export const darkTheme = {
    body: backgroundDark,
    inside: contentDark,
    text: backgroundTextDark,
    filter: "invert(100%)",
};