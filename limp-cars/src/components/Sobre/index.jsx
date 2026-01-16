import React from "react";

import { Subtitle, Title, Section, Container, Imagem } from "./style";

import car from "../../assets/images/sobre.png";

const Sobre = () => {
  return (
    <>
      <Section id="sobre">
        <Subtitle>DNA LIMPCARS</Subtitle>
        <Title>Estética Automotiva Premium</Title>

        <Container>
            <Imagem src={car} alt="Sobre a Limpcars" />
        </Container>
      </Section>
    </>
  );
};

export default Sobre;
