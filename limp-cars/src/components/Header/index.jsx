import React, { useState } from "react";
import logo from "../../assets/images/limpcars-logo.png";
import {
  Headers,
  Container,
  Logo,
  Links,
  Agendar,
  MenuToggle,
  MobileMenu,
  MobileMenuOverlay,
  MobileLinks,
  MobileAgendar,
} from "./style";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Headers>
        <Container>
          <Logo>
            <img src={logo} alt="Limp Cars" />
          </Logo>

          <Links>
            <a href="#home" onClick={closeMenu}>Inicio</a>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#galeria" onClick={closeMenu}>Galeria</a>
            <a href="#depoimentos" onClick={closeMenu}>Depoimentos</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
          </Links>

          <Agendar onClick={() => window.location.href = "#contato"}>
            <a href="#contato" style={{ textDecoration: "none", color: "black" }}>
              Agendar
            </a>
          </Agendar>

          <MenuToggle onClick={toggleMenu} isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MenuToggle>
        </Container>
      </Headers>

      <MobileMenuOverlay isOpen={isMenuOpen} onClick={closeMenu} />
      <MobileMenu isOpen={isMenuOpen}>
        <MobileLinks>
          <a href="#home" onClick={closeMenu}>Inicio</a>
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#galeria" onClick={closeMenu}>Galeria</a>
          <a href="#depoimentos" onClick={closeMenu}>Depoimentos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </MobileLinks>
        <MobileAgendar href="#contato" onClick={closeMenu}>
          Agendar
        </MobileAgendar>
      </MobileMenu>
    </>
  );
};

export default Header;
