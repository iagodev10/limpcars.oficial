import {
  Section,
  Grid,
  MainCard,
  ImageCard,
  StatCard,
  Subtitle,
  Title
} from "./style";

import luxury from "../../assets/images/luxury.png";
// import descontaminacao from "../../assets/images/descontaminacao.png";
// import higienizacao from "../../assets/images/higienizacao.png";

export default function EliteMatrix() {
  return (
    <Section id="servicos">
      <Subtitle>ECOSSISTEMA DE SERVIÇOS</Subtitle>
      <Title>Estética Automotiva Premium</Title>

      <Grid>
        {/* Card principal */}
        <MainCard image={luxury}>
          <h3>Proteção da Pintura Premium</h3>
          <p>
            Aplicação de proteção que preserva o brilho, facilita a
            limpeza e aumenta a durabilidade da pintura.
          </p>
          <span>CONHECER SERVIÇO</span>
        </MainCard>

        {/* Small card 1 */}
        <ImageCard image={luxury}>
          <h4>Descontaminação de Pintura</h4>
          <p>
            Remoção de impurezas profundas e contaminantes da superfície.
          </p>
        </ImageCard>

        {/* Small card 2 */}
        <ImageCard image={luxury}>
          <h4>Higienização Interna Premium</h4>
          <p>
            Limpeza detalhada do interior para máximo conforto e estética.
          </p>
        </ImageCard>

        {/* Card estatística */}
        <StatCard>
          <strong>5k+</strong>
          <span>Veículos atendidos</span>
        </StatCard>
      </Grid>
    </Section>
  );
}
