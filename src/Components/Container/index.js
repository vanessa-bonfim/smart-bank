import React from "react";
import styled from "styled-components";

import Title from "Components/Title";
import Account from "Components/Account";

const Container = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default () => {
  return (
    <Container>
      <Title>Olá Fulano!</Title>
      <Content>
        <Account />
      </Content>
    </Container>
  );
};
