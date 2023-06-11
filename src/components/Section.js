import React from "react";
import styled from "styled-components";


export default function Section() {
  return (
    <div>
    <Wrap>
        <ItemText>
            <h1>Model S</h1>
             <p>Order online</p>
          </ItemText>
      </Wrap>

     </div>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image=orange;
`;
