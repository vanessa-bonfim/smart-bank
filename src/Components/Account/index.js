import React, { useState } from "react";
import styled from "styled-components";

import privated from "assets/images/privado.svg";
import icon__eye from "assets/images/olho.svg";
import money from "assets/images/dinheiro.svg";

import {Icon} from "Components/UI";

const MarginIcon = styled(Icon)`
  margin-top: 2px;
`

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <div className="box">
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icon src={money} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <div className="balance">
            <span className="detail">R$</span> 0,00{" "}
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={toggleHandler}>
        <MarginIcon
          src={toggleState ? privated : icon__eye}
          alt="Privacidade do Saldo"
        />
      </button>
    </div>
  );
};

export default Account;
