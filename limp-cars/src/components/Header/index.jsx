import React from "react";


import logo from "../../assets/images/limpcars-logo.png";

import {Headers, Container, Logo, Links, Agendar} from "./style";

const Header = () => {
    return (
        <>
            <Headers>
                <Container>
                    <Logo>
                        <img src={logo} alt="" />
                    </Logo>

                    <Links>
                        <a href="#home">Inicio</a>
                        <a href="#servicos">Serviços</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#galeria">Galeria</a>
                        <a href="#depoimentos">Depoimentos</a>
                        <a href="#contato">Contato</a>
                    </Links>

                    <Agendar onClick={() => window.location.href = "#contato"}>
                        <a href="#contato" style={{ textDecoration: "none", color: "black" }}>
                            Agendar
                        </a>
                    </Agendar>
                </Container>
            </Headers>
        </>
    );
};

export default Header;
