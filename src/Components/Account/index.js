import React, { useState } from "react";

// Importação do módulo 'styled' do 'styled-components'
import styled from "styled-components";

// Importação das imagens
import privated from "assets/images/privado.svg";
import icon__eye from "assets/images/olho.svg";
import money from "assets/images/dinheiro.svg";

// Importação de componentes do projeto
import { Balance, Box, Button, Detail, Icon, IconTheme } from "Components/UI";

// Estilização do ícone com margem superior
const MarginIcon = styled(Icon)`
  margin-top: 2px;
`;

// Componente 'Account'
const Account = () => {
  // Definição do estado 'toggleState' com o hook 'useState'
  const [toggleState, untoggle] = useState(true);

  // Função para lidar com o clique no botão de alternância
  const toggleHandler = () => {
    // Alteração do estado 'toggleState' usando a função 'untoggle' do hook 'useState'
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          {/* Ícone do tema usando o componente 'IconTheme' */}
          <IconTheme src={money} alt="Ícone Saldo" />
        </span>
        {/* Renderização condicional do componente 'Balance' com base no estado 'toggleState' */}
        {toggleState ? (
          <Balance>
            {/* Componente 'Detail' para exibir 'R$' */}
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>
      {/* Botão com o ícone de alternância */}
      <Button onClick={toggleHandler}>
        {/* Ícone com margem usando o componente 'MarginIcon' */}
        <MarginIcon
          src={toggleState ? privated : icon__eye}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Account;