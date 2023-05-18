import React from "react";
import food from "assets/images/alimentacao.svg";
import others from "assets/images/outros.svg";
import health from "assets/images/saude.svg";
import transport from "assets/images/transporte.svg";
import utilities from "assets/images/utilidades.svg";
import { Icon } from "Components/UI";

const ImageFilter = (type) => {
    const Images = {
        Restaurante: <Icon src={food} alt="Restaurante" />,
        Utilidades: <Icon src={utilities} alt="Utilidades" />,
        Saude: <Icon src={health} alt="Saude" />,
        Transporte: <Icon src={transport} alt="Transporte" />,
        default: <Icon src={others} alt="Outros" />,
    }

    return Images[type] || Images.default;
}
export default ImageFilter;