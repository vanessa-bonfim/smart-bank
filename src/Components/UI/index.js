import styled from "styled-components";

// Estilização do ícone
export const Icon = styled.img`
  height: 25px;
  width: 25px; 
`;

// Estilização do ícone do tema
export const IconTheme = styled(Icon)`
  filter: ${({ theme }) => theme.filter};
`;

// Estilização da caixa
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

// Estilização do botão
export const Button = styled.button`
  display: block;
  border-radius: 20px;
  background-color: #41d3be;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
  margin: 15px auto 0px auto;
`;

// Estilização do detalhe
export const Detail = styled.span`
  color: #41d3be;
  font-size: 24px;
`;

// Estilização do saldo
export const Balance = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

// Estilização do botão de tema
export const BtnTheme = styled.button`
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  position: absolute;
`;
