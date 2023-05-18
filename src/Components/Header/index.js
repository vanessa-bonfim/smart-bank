import React from "react";
// Importação do módulo 'styled' do 'styled-components'
import styled from "styled-components";
// Importação da imagem do logotipo da marca
import brand__image from "assets/images/bank_logo.svg";
// Importação da variável 'primaryColor' do componente 'UI/variaveis'
import { primaryColor } from "Components/UI/variaveis";

// Estilização do botão de cabeçalho
const BtnHeader = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;

    /* Estilo condicional com base na propriedade 'primary' */
    background: ${(props) => (props.primary ? "white" : primaryColor)};
    color: ${(props) => (props.primary ? primaryColor : "white")};
`;

// Estilização do cabeçalho
const StyledHeader = styled.nav`
    background-color: ${primaryColor};
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 10vh;
    align-items: center;
`;

// Estilização do logotipo da marca
const Brand = styled.img`
    height: 50px;
    width: 50px;
`;

// Componente 'Header'
const Header = () => {
    return (
        <>
            <StyledHeader>
                {/* Renderização do logotipo da marca */}
                <Brand src={brand__image} alt="Logo Smart Bank" />
                <div>
                    {/* Botões de cabeçalho */}
                    <BtnHeader primary="1" href="#">
                        Ajuda
                    </BtnHeader>
                    <BtnHeader primary="1" href="#">
                        Sair
                    </BtnHeader>
                </div>
            </StyledHeader>
        </>
    );
};

export default Header;