import styled from "styled-components";

export const Headers = styled.header`
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        height: 80px;
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 60px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 99px;
    background-color: rgba(10, 10, 10, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

    @media (max-width: 968px) {
        padding: 0 15px;
    }
`;

export const Logo = styled.div`
    width: 120px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;

    img {
        height: 50px;
        width: auto;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        width: 100px;

        img {
            height: 40px;
        }
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: 968px) {
        display: none;
    }

    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        font-family: 'Inter Tight', sans-serif;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        transition: all 0.3s ease;
        white-space: nowrap;
    }

    a:hover {
        color: white;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }
`;

export const Agendar = styled.button`
    padding: 0 24px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: black;
    font-family: 'Inter Tight', sans-serif;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    border-radius: 99px;
    border: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    white-space: nowrap;
    flex-shrink: 0;

    @media (max-width: 968px) {
        display: none;
    }

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export const MenuToggle = styled.button`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    @media (max-width: 968px) {
        display: flex;
    }

    span {
        width: 30px;
        height: 2px;
        background-color: ${props => props.isOpen ? '#00e0ff' : 'rgba(255, 255, 255, 0.9)'};
        border-radius: 10px;
        transition: all 0.3s ease;
        transform-origin: center;

        &:nth-child(1) {
            transform: ${props => props.isOpen ? 'rotate(45deg) translate(8px, 8px)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            opacity: ${props => props.isOpen ? '0' : '1'};
            transform: ${props => props.isOpen ? 'translateX(-20px)' : 'translateX(0)'};
        }

        &:nth-child(3) {
            transform: ${props => props.isOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'rotate(0)'};
        }
    }
`;

export const MobileMenuOverlay = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    @media (min-width: 969px) {
        display: none;
    }
`;

export const MobileMenu = styled.div`
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 300px;
    max-width: 85%;
    height: 100vh;
    background: linear-gradient(135deg, #0a0a0a 0%, #050505 100%);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1000;
    padding: 100px 30px 40px;
    box-sizing: border-box;
    transition: right 0.3s ease;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 969px) {
        display: none;
    }
`;

export const MobileLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.8);
        font-family: 'Inter Tight', sans-serif;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        transition: all 0.3s ease;
        padding: 12px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);

        &:hover {
            color: #00e0ff;
            padding-left: 10px;
        }
    }
`;

export const MobileAgendar = styled.a`
    display: block;
    padding: 16px 24px;
    background: linear-gradient(135deg, #00e0ff 0%, #00b8d4 100%);
    color: #050505;
    text-decoration: none;
    font-family: 'Inter Tight', sans-serif;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    border-radius: 99px;
    text-align: center;
    transition: all 0.3s ease;
    margin-top: auto;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0, 224, 255, 0.4);
    }
`;

