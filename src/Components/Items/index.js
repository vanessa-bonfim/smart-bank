import React from "react";
import styled from "styled-components";
import BoxItem from "Components/Item";
import ImageFilter from "Components/ImageFilter";

const Items = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
  border-radius: 2px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

const BoxItems = (props) => {
    return(
       <Items>
        {ImageFilter(props.type)}
        <BoxItem {...props}/>
        <span>{props.date}</span>
       </Items>
    )
}

export default BoxItems;