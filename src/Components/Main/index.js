import React from "react";
import styled from "styled-components";
import Title from "Components/Title";
import Account from "Components/Account";
import Extract from "Components/Extract";

const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;
const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
      flex-direction: column;
  }  
`;
const Main = () => {
  return (
    <Container>
      <Title>Olá Fulano!</Title>
      <Content>
        <Account />
        <Extract />
      </Content>
    </Container>
  );
};
export default Main;