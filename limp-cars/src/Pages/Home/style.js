import styled from "styled-components";

export const Inicio = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color: rgba(0, 0, 0, 0.5); */
    }
`;


export const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    
`;

export const Conteudo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-align: center;
    color: #fff;
    width: 100%;
    max-width: 900px;
    padding: 0 20px;
    box-sizing: border-box;
`;

export const Subtitle = styled.span`
    font-size: 14px;
    letter-spacing: 4px;
    color: #00e0ff;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    margin-bottom: 20px;
    font-family: 'Inter Tight', sans-serif;
`;

export const HeroTitle = styled.h1`
    font-size: 64px;
    font-weight: 300;
    margin: 0 0 24px 0;
    line-height: 1.2;
    font-family: 'Inter Tight', sans-serif;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
        font-size: 42px;
    }

    @media (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroDescription = styled.p`
    font-size: 18px;
    line-height: 1.8;
    opacity: 0.9;
    margin: 0 0 40px 0;
    font-family: 'Inter Tight', sans-serif;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const CTAButton = styled.a`
    display: inline-block;
    padding: 16px 40px;
    background: linear-gradient(135deg, #00e0ff 0%, #00b8d4 100%);
    color: #050505;
    text-decoration: none;
    font-family: 'Inter Tight', sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 99px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0, 224, 255, 0.4);
        background: linear-gradient(135deg, #00c4e0 0%, #00a8c4 100%);
    }
`;