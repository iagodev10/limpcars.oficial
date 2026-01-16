import styled from "styled-components";

export const Headers = styled.header`
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Container = styled.div`
    width: 100%;
    max-width: 900px; /* Reduced width for that compact look */
    height: 60px; /* Specific height for the pill */
    margin: 0 auto;
    padding: 0 10px 0 25px; /* Adjust padding for logo and button */
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 99px;
    background-color: rgba(10, 10, 10, 0.8); /* Dark background */
    border: 1px solid rgba(255, 255, 255, 0.08); /* Subtle border */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.div`
    width: 120px;
    height: 100%;
    display: flex;
    align-items: center;

    img {
        height: 65px; /* Adjust logo size within the pill */
        width: auto;
        object-fit: contain;
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        font-family: 'Inter Tight', sans-serif;
        font-size: 11px; /* Smaller, cleaner font */
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        transition: all 0.3s ease;
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
    font-weight: 800; /* Extra bold for the button */
    letter-spacing: 0.02em;
    text-transform: uppercase;
    border-radius: 99px;
    border: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }
`;

