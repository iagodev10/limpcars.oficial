import React from "react";

import Car from "../../assets/images/banner4.png";
import EliteMatrix from "../../components/EliteMatrix";
import LevaTrazSection from "../../components/LevaTrazSection";
import Sobre from "../../components/Sobre";
import Galeria from "../../components/Galeria";
import GoogleReviews from "../../components/GoogleReviews";
import Contato from "../../components/Contato";

import { Inicio, Container, Imagem, Conteudo, Subtitle, HeroTitle, HeroDescription, CTAButton } from "./style";

const Home = () => {
    return (
        <>
            <Inicio id="home">
                <Container>
                    <Imagem src={Car} alt="" />

                    <Conteudo>
                        <Subtitle>Estética Automotiva Premium</Subtitle>
                        <HeroTitle>Transforme seu veículo em uma obra de arte</HeroTitle>
                        <HeroDescription>
                            Cuidamos do seu carro com produtos de alta tecnologia e atenção aos detalhes. 
                            Seu veículo merece o melhor tratamento.
                        </HeroDescription>
                        <CTAButton href="#contato">Agendar Serviço</CTAButton>
                    </Conteudo>
                </Container>
            </Inicio>
            <EliteMatrix />
            <LevaTrazSection />
            <Sobre />
            <Galeria />
            <GoogleReviews />
            <Contato />
        </>
    );
};

export default Home;
