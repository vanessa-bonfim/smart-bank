import React from "react";
// Importação do módulo 'styled' do 'styled-components'
import styled from "styled-components";
// Importação do componente 'Title'
import Title from "Components/Title";
// Importação do componente 'Account'
import Account from "Components/Account";
// Importação do componente 'Extract'
import Extract from "Components/Extract";

// Estilização do contêiner
const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

// Estilização do conteúdo
const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
      flex-direction: column;
  }  
`;

// Componente 'Main'
const Main = () => {
  return (
    <Container>
      {/* Renderização do componente 'Title' */}
      <Title>Olá Fulano!</Title>
      <Content>
        {/* Renderização do componente 'Account' */}
        <Account />
        {/* Renderização do componente 'Extract' */}
        <Extract />
      </Content>
    </Container>
  );
};

export default Main;
