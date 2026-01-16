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
  color: #00e0ff;
  width: 100%;
  max-width: 1200px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 10px 0 40px;
  width: 100%;
  max-width: 1200px;
  font-weight: 400; /* Matching reference lightness */
  font-family: 'Inter Tight', sans-serif;
`;

export const Texto = styled.p`
  font-family: 'Inter Tight', sans-serif;
  font-size: 15px;
  opacity: 0.8;
  max-width: 420px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  max-width: 1400px;
`;

export const Mapa = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input, textarea {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: transparent;
    color: #ffffff;
    font-size: 14px;
  }

  textarea {
    resize: vertical;
  }

  button {
    padding: 12px 28px;
    border-radius: 99px;
    background-color: #00e0ff;
    color: #050505;
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

