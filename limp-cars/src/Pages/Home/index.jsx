import React from "react";

import Car from "../../assets/images/luxury.png";
import EliteMatrix from "../../components/EliteMatrix";
import LevaTrazSection from "../../components/LevaTrazSection";
import Sobre from "../../components/Sobre";
import GoogleReviews from "../../components/GoogleReviews";
import Contato from "../../components/Contato";

import { Inicio, Container, Imagem, Conteudo } from "./style";

const Home = () => {
    return (
        <>
            <Inicio id="home">
                <Container>
                    <Imagem src={Car} alt="" />

                    <Conteudo>
                        
                    </Conteudo>
                </Container>
            </Inicio>
            <EliteMatrix />
            <LevaTrazSection />
            <Sobre />
            <GoogleReviews />
            <Contato />
        </>
    );
};

export default Home;
