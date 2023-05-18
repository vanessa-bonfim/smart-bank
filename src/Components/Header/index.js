import React from "react";
import styled from "styled-components";
import brand__image from "assets/images/bank_logo.svg";
import {primaryColor} from "Components/UI/variaveis";

const BtnHeader = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;

    background: ${(props) => (props.primary ? "white" : primaryColor)};
    color: ${(props) => (props.primary ? primaryColor : "white")};
`
const StyledHeader = styled.nav`
background-color: ${primaryColor};
display: flex;
justify-content: space-between;
padding: 0 15vw;
height: 10vh;
align-items: center;
`
const Brand = styled.img`
height: 50px;
  width: 50px;
`
const Header = () => {
    return (
        <>        
            <StyledHeader>
                <Brand src={brand__image} alt="Logo Smart Bank"/>
                <div>
                    <BtnHeader primary="1" href="#">
                        Ajuda
                    </BtnHeader>
                    <BtnHeader primary="1" href="#">
                        Sair
                    </BtnHeader>
                </div>
            </StyledHeader>
        </>
    )
}

export default Header;