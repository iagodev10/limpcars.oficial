import React from "react";
import { PiHandTapFill } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";

import {
  Section,
  Container,
  TopGrid,
  BottomGrid,
  HeroCard,
  Tag,
  TagIcon,
  HeroTitle,
  HeroSubtitle,
  StepsCard,
  StepsTitle,
  StepsList,
  StepItem,
  StepBullet,
  StepTextTitle,
  StepTextSubtitle,
  BenefitsCard,
  BenefitsTitle,
  BenefitsList,
  BenefitItem,
  BenefitIcon,
  BenefitLabel,
  BenefitDescription,
  CtaCard,
  CtaText,
  CtaButton,
} from "./style";

import car from "../../assets/images/luxury.png";

export default function LevaTrazSection() {
  return (
    <Section>
      <Container>
        <TopGrid>
          <HeroCard image={car}>
            <Tag>
              <TagIcon />
              <span>Exclusive Experience</span>
            </Tag>

            <HeroTitle>
              Serviço leva e traz:
              <br />
              <span>Conforto absoluto</span>
            </HeroTitle>

            <HeroSubtitle>
              Já imaginou deixar seu carro impecável sem precisar sair de casa
              ou do trabalho? Buscamos, cuidamos e devolvemos com excelência.
            </HeroSubtitle>
          </HeroCard>

          <StepsCard>
            <StepsTitle>Como funciona</StepsTitle>

            <StepsList>
              <StepItem>
                <StepBullet>1</StepBullet>
                <StepTextTitle>Agende</StepTextTitle>
                <StepTextSubtitle>
                  Informe o endereço e horário ideal.
                </StepTextSubtitle>
              </StepItem>

              <StepItem>
                <StepBullet>2</StepBullet>
                <StepTextTitle>Coleta</StepTextTitle>
                <StepTextSubtitle>
                  Buscamos seu veículo com segurança.
                </StepTextSubtitle>
              </StepItem>

              <StepItem>
                <StepBullet>3</StepBullet>
                <StepTextTitle>Entrega</StepTextTitle>
                <StepTextSubtitle>
                  Devolvemos no horário combinado.
                </StepTextSubtitle>
              </StepItem>
            </StepsList>
          </StepsCard>
        </TopGrid>

        <BottomGrid>
          <BenefitsCard>
            <BenefitsTitle>Benefícios para você</BenefitsTitle>

            <BenefitsList>
              <BenefitItem>
                <BenefitIcon><FaCheck fontSize={20} color="black" align="center" /></BenefitIcon>
                <BenefitLabel>Economia de tempo</BenefitLabel>
                <BenefitDescription>
                  Ideal para sua rotina agitada.
                </BenefitDescription>
              </BenefitItem>

              <BenefitItem>
                <BenefitIcon><FaCheck fontSize={20} color="black" align="center" /></BenefitIcon>  
                <BenefitLabel>Comodidade</BenefitLabel>
                <BenefitDescription>
                  Cuidamos de tudo para você.
                </BenefitDescription>
              </BenefitItem>

              <BenefitItem>
                <BenefitIcon><FaCheck fontSize={20} color="black" align="center" /></BenefitIcon>
                <BenefitLabel>Segurança</BenefitLabel>
                <BenefitDescription>
                  Seu carro nas mãos de profissionais.
                </BenefitDescription>
              </BenefitItem>
            </BenefitsList>
          </BenefitsCard>

          <CtaCard>
            <PiHandTapFill size={38} color="#32DA13" />
            <CtaText>Tenha mais praticidade no seu dia a dia.</CtaText>
            <CtaButton>Clique aqui e agende agora</CtaButton>
          </CtaCard>
        </BottomGrid>
      </Container>
    </Section>
  );
}
