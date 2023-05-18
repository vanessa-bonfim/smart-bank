import React from "react";
// Importação do módulo 'styled' do 'styled-components'
import styled from "styled-components";
// Importação do componente 'BoxItem'
import BoxItem from "Components/Item";
// Importação do componente 'ImageFilter'
import ImageFilter from "Components/ImageFilter";

// Estilização dos itens
const Items = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
  border-radius: 2px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

// Componente 'BoxItems'
const BoxItems = (props) => {
    return (
        <Items>
            {/* Renderização do componente 'ImageFilter' com base na propriedade 'type' */}
            {ImageFilter(props.type)}
            {/* Renderização do componente 'BoxItem' com todas as propriedades passadas */}
            <BoxItem {...props}/>
            {/* Exibição da data */}
            <span>{props.date}</span>
        </Items>
    );
};

export default BoxItems;
