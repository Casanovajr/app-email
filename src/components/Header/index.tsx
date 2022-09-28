import React from "react";
import { IconContainer } from "../Input/styles";
import { Container, Subtitle, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <Title>Blue{"\n"}Pen Mail</Title>

      <Subtitle>
        Seu E-mail está{"\n"}
        marcado com minha letra
      </Subtitle>
    </Container>
  );
}
