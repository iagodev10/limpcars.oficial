import React, { useState } from "react";

import {
  Section,
  HeaderSection,
  Subtitle,
  Title,
  Texto,
  MainContainer,
  LeftColumn,
  RightColumn,
  InfoCard,
  InfoItem,
  IconWrapper,
  InfoText,
  InfoTitle,
  InfoDescription,
  Mapa,
  Formulario,
  InputGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  ButtonIcon,
} from "./style";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const texto = `Olá, gostaria de mais informações!
        
        Nome: ${nome}
        Telefone: ${telefone}
        Serviço: ${servico}
        Mensagem: ${mensagem}
        `;

    const zap = "https://wa.me/553492911990?text=" + encodeURIComponent(texto);

    window.open(zap, "_blank");
    
    // Limpar formulário após envio
    setNome("");
    setTelefone("");
    setServico("");
    setMensagem("");
  };

  return (
    <>
      <Section id="contato">
        <HeaderSection>
          <Subtitle>CONTATO</Subtitle>
          <Title>Entre em Contato</Title>
          <Texto>
            Agende seu serviço ou tire suas dúvidas. Estamos prontos para atender
            você com excelência!
          </Texto>
        </HeaderSection>

        <MainContainer>
          <LeftColumn>
            <InfoCard>
              <InfoItem>
                <IconWrapper>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </IconWrapper>
                <InfoText>
                  <InfoTitle>Telefone</InfoTitle>
                  <InfoDescription href="tel:+553492911990">(34) 99291-1990</InfoDescription>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </IconWrapper>
                <InfoText>
                  <InfoTitle>E-mail</InfoTitle>
                  <InfoDescription href="mailto:contato@limpcars.com.br">contato@limpcars.com.br</InfoDescription>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </IconWrapper>
                <InfoText>
                  <InfoTitle>Endereço</InfoTitle>
                  <InfoDescription>Uberlândia - MG</InfoDescription>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                  </svg>
                </IconWrapper>
                <InfoText>
                  <InfoTitle>Horário</InfoTitle>
                  <InfoDescription>Seg - Sáb: 8h às 18h</InfoDescription>
                </InfoText>
              </InfoItem>
            </InfoCard>

            <Mapa>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.42234677408!2d-48.32669312391013!3d-18.912690907439877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4455e47bd1fbf%3A0xa09f10c389634c2b!2sLimp%20Car%20%7C%20Est%C3%A9tica%20Automotiva!5e0!3m2!1spt-BR!2sbr!4v1768589721810!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Limp Car"
              ></iframe>
            </Mapa>
          </LeftColumn>

          <RightColumn>
            <Formulario onSubmit={handleSubmit}>
              <InputGroup>
                <Label htmlFor="nome">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Nome Completo
                </Label>
                <Input 
                  type="text" 
                  id="nome"
                  value={nome} 
                  placeholder="Digite seu nome completo" 
                  onChange={(e) => setNome(e.target.value)} 
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="telefone">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Telefone / WhatsApp
                </Label>
                <Input 
                  type="tel" 
                  id="telefone"
                  value={telefone} 
                  placeholder="(34) 99999-9999" 
                  onChange={(e) => setTelefone(e.target.value)} 
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="servico">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Serviço de Interesse
                </Label>
                <Input 
                  type="text" 
                  id="servico"
                  value={servico} 
                  placeholder="Ex: Proteção de pintura, Higienização..." 
                  onChange={(e) => setServico(e.target.value)} 
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="mensagem">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Mensagem
                </Label>
                <TextArea 
                  id="mensagem"
                  value={mensagem} 
                  placeholder="Conte-nos como podemos ajudar você..." 
                  onChange={(e) => setMensagem(e.target.value)} 
                  rows="6"
                />
              </InputGroup>

              <SubmitButton type="submit">
                <span>Enviar Mensagem</span>
                <ButtonIcon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ButtonIcon>
              </SubmitButton>
            </Formulario>
          </RightColumn>
        </MainContainer>
      </Section>
    </>
  );
};

export default Contato;
