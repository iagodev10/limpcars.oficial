import React from "react";

import {
  Subtitle,
  Title,
  Section,
  Container,
  Imagem,
  Conteudo,
  Description,
  VideosGrid,
  VideoCard,
  Video,
} from "./style";

import car from "../../assets/images/sobre.png";
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video3 from "../../assets/videos/video3.mp4";

const Sobre = () => {
  return (
    <>
      <Section id="sobre">
        <Subtitle>DNA LIMPCARS</Subtitle>
        <Title>Estética Automotiva Premium</Title>

        <Container>
          <Imagem src={car} alt="Sobre a Limpcars" />

          <Conteudo>
            <Subtitle>DNA LIMPCARS</Subtitle>
            <Title style={{marginBottom: "8px"}}>Paixão que Brilha em cada detalhe</Title>
            <Description>
              A Limpcars é uma empresa especializada em estética automotiva
              premium, com foco na satisfação do cliente. Nossa missão é
              proporcionar um serviço de alta qualidade, com produtos de alta
              tecnologia e um atendimento personalizado.
            </Description>
          </Conteudo>
        </Container>
        <VideosGrid>
          <VideoCard>
            <Video src={video1} controls loop muted />
          </VideoCard>
          <VideoCard>
            <Video src={video2} controls loop muted />
          </VideoCard>
          <VideoCard>
            <Video src={video3} controls loop muted />
          </VideoCard>
        </VideosGrid>
      </Section>
    </>
  );
};

export default Sobre;
