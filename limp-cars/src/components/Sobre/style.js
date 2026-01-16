import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 6%;
  background-color: #050505;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.span`
  font-size: 12px;
  letter-spacing: 2px;
  color: #32DA13;
  align-self: flex-start; /* Keep text alignment */
  width: 100%;
  max-width: 1200px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 10px 0 40px;
  align-self: flex-start; /* Keep text alignment */
  width: 100%;
  max-width: 1200px;
  font-weight: 400; /* Matching reference lightness */
  font-family: 'Inter Tight', sans-serif;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px;
`;

export const Imagem = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  object-fit: cover;
`;