import React from "react";
import food from "assets/images/alimentacao.svg";
import others from "assets/images/outros.svg";
import health from "assets/images/saude.svg";
import transport from "assets/images/transporte.svg";
import utilities from "assets/images/utilidades.svg";
import { IconTheme } from "Components/UI";

const ImageFilter = (type) => {
    const Images = {
        Restaurante: <IconTheme src={food} alt="Restaurante" />,
        Utilidades: <IconTheme src={utilities} alt="Utilidades" />,
        Saude: <IconTheme src={health} alt="Saude" />,
        Transporte: <IconTheme src={transport} alt="Transporte" />,
        default: <IconTheme src={others} alt="Outros" />,
    }

    return Images[type] || Images.default;
}
export default ImageFilter;