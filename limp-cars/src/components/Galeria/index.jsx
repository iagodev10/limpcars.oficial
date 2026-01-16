import React from "react";
import {
  Section,
  HeaderSection,
  Subtitle,
  Title,
  Texto,
  GalleryGrid,
  GalleryItem,
  PlaceholderImage,
  PlaceholderText,
} from "./style";

const Galeria = () => {
  // Array de placeholders - você pode substituir depois pelas imagens reais
  const placeholderItems = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <Section id="galeria">
      <HeaderSection>
        <Subtitle>GALERIA</Subtitle>
        <Title>Nossos Trabalhos</Title>
        <Texto>
          Confira alguns dos nossos trabalhos realizados com excelência e dedicação.
          Cada detalhe é tratado com cuidado especial.
        </Texto>
      </HeaderSection>

      <GalleryGrid>
        {placeholderItems.map((item) => (
          <GalleryItem key={item}>
            <PlaceholderImage>
              <PlaceholderText>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Imagem {item}</span>
              </PlaceholderText>
            </PlaceholderImage>
          </GalleryItem>
        ))}
      </GalleryGrid>
    </Section>
  );
};

export default Galeria;
