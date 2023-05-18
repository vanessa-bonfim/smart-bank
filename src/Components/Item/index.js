import React from 'react';
// Importação do módulo 'styled' do 'styled-components'
import styled from "styled-components";

// Estilização do item
const Item = styled.div`
    display: flex;
    flex-direction: column;

    .text {
        font-weight: bold;
    }
`;

// Componente 'BoxItem'
const BoxItem = ({ type, from, value }) => {
    return (
        <Item>
            {/* Exibição do tipo com classe 'text' */}
            <span className='text'>{type}</span>
            {/* Exibição de 'from' */}
            <span>{from}</span>
            {/* Exibição de 'value' */}
            <span>{value}</span>
        </Item>
    );
};

export default BoxItem;
