import styled from "styled-components"

export const Headers = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    transition: all 0.3s ease;

    @media (max-width: 968px) {
        height: 65px;
        padding: 0 12px;
    }

    @media (max-width: 768px) {
        height: 60px;
        padding: 0 10px;
    }

    @media (max-width: 480px) {
        height: 56px;
        padding: 0 8px;
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 50px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 99px;
    background-color: rgba(10, 10, 10, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    @media (max-width: 968px) {
        height: 46px;
        padding: 0 16px;
        max-width: 95%;
    }

    @media (max-width: 768px) {
        height: 44px;
        padding: 0 14px;
        max-width: 100%;
        border-radius: 50px;
    }

    @media (max-width: 480px) {
        height: 42px;
        padding: 0 12px;
        border-radius: 40px;
    }
`

export const Logo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;

    img {
        height: 60px;
        width: auto;
        object-fit: contain;
        transition: height 0.3s ease;
    }

    @media (max-width: 968px) {
        img {
            height: 32px;
        }
    }

    @media (max-width: 768px) {
        img {
            height: 30px;
        }
    }

    @media (max-width: 480px) {
        img {
            height: 28px;
        }
    }
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
    flex: 1;
    justify-content: center;

    @media (max-width: 1100px) {
        gap: 20px;
    }

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
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #00e0ff, #00b8d4);
            transition: width 0.3s ease;
            border-radius: 2px;
        }

        &:hover {
            color: white;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);

            &::after {
                width: 100%;
            }
        }
    }
`

export const Agendar = styled.button`
    padding: 0 22px;
    height: 38px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: black;
    font-family: 'Inter Tight', sans-serif;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    border-radius: 99px;
    border: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    white-space: nowrap;
    flex-shrink: 0;
    margin-left: 16px;

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
`

export const MenuToggle = styled.button`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    cursor: pointer;
    padding: 6px;
    z-index: 1001;
    transition: all 0.3s ease;
    gap: 4px;

    @media (max-width: 968px) {
        display: flex;
    }

    @media (max-width: 480px) {
        width: 30px;
        height: 30px;
        padding: 5px;
        gap: 3px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    &:active {
        transform: scale(0.95);
    }

    span {
        width: 16px;
        height: 2px;
        background-color: ${(props) => (props.$isOpen ? "#00e0ff" : "rgba(255, 255, 255, 0.9)")};
        border-radius: 10px;
        transition: all 0.3s ease;
        transform-origin: center;

        @media (max-width: 480px) {
            width: 14px;
        }

        &:nth-child(1) {
            transform: ${(props) => (props.$isOpen ? "rotate(45deg) translate(4px, 4px)" : "rotate(0)")};
        }

        &:nth-child(2) {
            opacity: ${(props) => (props.$isOpen ? "0" : "1")};
            transform: ${(props) => (props.$isOpen ? "translateX(-20px)" : "translateX(0)")};
        }

        &:nth-child(3) {
            transform: ${(props) => (props.$isOpen ? "rotate(-45deg) translate(4px, -4px)" : "rotate(0)")};
        }
    }
`

export const MobileMenuOverlay = styled.div`
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    animation: ${(props) => (props.$isOpen ? "fadeIn 0.3s ease" : "none")};

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (min-width: 969px) {
        display: none;
    }
`

export const MobileMenu = styled.div`
    position: fixed;
    top: 70px;
    right: ${(props) => (props.$isOpen ? "10px" : "-320px")};
    width: 280px;
    max-width: calc(100vw - 20px);
    height: auto;
    max-height: calc(100vh - 90px);
    background: rgba(10, 10, 10, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    z-index: 1000;
    padding: 16px;
    box-sizing: border-box;
    transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        top: 65px;
        max-height: calc(100vh - 80px);
    }

    @media (max-width: 480px) {
        top: 60px;
        right: ${(props) => (props.$isOpen ? "8px" : "-320px")};
        width: calc(100vw - 16px);
        max-width: calc(100vw - 16px);
        max-height: calc(100vh - 75px);
        border-radius: 14px;
    }

    @media (min-width: 969px) {
        display: none;
    }
`

export const CloseButton = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #00e0ff;
    }

    &:active {
        transform: scale(0.95);
    }
`

export const MobileLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 24px;

    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.85);
        font-family: 'Inter Tight', sans-serif;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        transition: all 0.3s ease;
        padding: 12px 14px;
        border-radius: 10px;
        background: transparent;
        border: 1px solid transparent;

        &:hover, &:active {
            color: #00e0ff;
            background: rgba(0, 224, 255, 0.05);
            border-color: rgba(0, 224, 255, 0.2);
            padding-left: 18px;
        }

        @media (max-width: 480px) {
            font-size: 13px;
            padding: 10px 12px;
        }
    }
`

export const MobileAgendar = styled.a`
    display: block;
    padding: 14px 20px;
    background: linear-gradient(135deg, #00e0ff 0%, #00b8d4 100%);
    color: #050505;
    text-decoration: none;
    font-family: 'Inter Tight', sans-serif;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s ease;
    margin-top: 8px;
    box-shadow: 0 4px 20px rgba(0, 224, 255, 0.3);

    &:hover, &:active {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(0, 224, 255, 0.5);
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 12px 16px;
        border-radius: 10px;
    }
`
