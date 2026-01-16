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
        background-color: rgba(0, 0, 0, 0.5);
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
`;