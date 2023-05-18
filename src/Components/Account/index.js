import React, { useState } from "react";
import styled from "styled-components";
import privated from "assets/images/privado.svg";
import icon__eye from "assets/images/olho.svg";
import money from "assets/images/dinheiro.svg";
import {Balance, Box, Button, Detail, Icon} from "Components/UI";

const MarginIcon = styled(Icon)`
  margin-top: 2px;
`;
const Account = () => {
  const [toggleState, untoggle] = useState(true);
  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };
  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icon src={money} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>
      <Button onClick={toggleHandler}>
        <MarginIcon
          src={toggleState ? privated : icon__eye}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Account;
