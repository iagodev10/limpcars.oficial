
import { useState, useEffect } from "react"
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
  CloseButton,
} from "./style"

import logo from "../../assets/images/limpcars-logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Bloquear scroll quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <Headers>
        <Container>
          <Logo>
            <img src={logo} alt="Limp Cars" />
          </Logo>

          <Links>
            <a href="#home" onClick={closeMenu}>
              Inicio
            </a>
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
            <a href="#galeria" onClick={closeMenu}>
              Galeria
            </a>
            <a href="#depoimentos" onClick={closeMenu}>
              Depoimentos
            </a>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </Links>

          <Agendar onClick={() => (window.location.href = "#contato")}>
            <a href="#contato" style={{ textDecoration: "none", color: "black" }}>
              Agendar
            </a>
          </Agendar>

          <MenuToggle onClick={toggleMenu} $isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MenuToggle>
        </Container>
      </Headers>

      <MobileMenuOverlay $isOpen={isMenuOpen} onClick={closeMenu} />
      <MobileMenu $isOpen={isMenuOpen}>
        <CloseButton onClick={closeMenu} aria-label="Fechar menu">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </CloseButton>
        <MobileLinks $isOpen={isMenuOpen}>
          <a href="#home" onClick={closeMenu}>
            Inicio
          </a>
          <a href="#servicos" onClick={closeMenu}>
            Serviços
          </a>
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#galeria" onClick={closeMenu}>
            Galeria
          </a>
          <a href="#depoimentos" onClick={closeMenu}>
            Depoimentos
          </a>
          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>
        </MobileLinks>
        <MobileAgendar href="#contato" onClick={closeMenu} $isOpen={isMenuOpen}>
          Agendar
        </MobileAgendar>
      </MobileMenu>
    </>
  )
}

export default Header
