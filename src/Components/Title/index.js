/* import React from "react"; */
import styled from "styled-components";

// Estilização do título
const Title = styled.h1`
  color: gray;
  padding: 25px 0;
`

/* 
    É o mesmo que retornar isto:
    const Title = ({children}) => {
    return <h1 className="title">{children}</h1>
}; */

export default Title