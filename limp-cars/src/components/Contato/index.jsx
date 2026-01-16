import React, { useState } from "react";

import {
  Section,
  Container,
  Subtitle,
  Title,
  Texto,
  Mapa,
  Formulario,
} from "./style";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const texto = `Olá, gostaria de mais informações!
        
        Nome: ${nome}
        Telefone: ${telefone}
        Serviço: ${servico}
        Mensagem: ${mensagem}
        `;

    const zap = "https://wa.me/553492911990?text=" + encodeURIComponent(texto);

    window.open(zap, "_blank");
  };

  return (
    <>
      <Section id="contato">
        <Subtitle>CONTATO</Subtitle>
        <Title>Entre em Contato</Title>
        <Texto>
          Agende seu serviço ou tire suas dúvidas. Estamos prontos para atender
          você!
        </Texto>

        <Container>
          <Mapa>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.42234677408!2d-48.32669312391013!3d-18.912690907439877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4455e47bd1fbf%3A0xa09f10c389634c2b!2sLimp%20Car%20%7C%20Est%C3%A9tica%20Automotiva!5e0!3m2!1spt-BR!2sbr!4v1768589721810!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Mapa>

          <Formulario>
            <label htmlFor="nome">Nome</label>
            <input type="text" value={nome} placeholder="Seu nome" onChange={(e) => setNome(e.target.value)} />

            <label htmlFor="Telefone">Telefone</label>
            <input type="text" value={telefone} placeholder="Seu telefone" onChange={(e) => setTelefone(e.target.value)} />

            <label htmlFor="Serviço">Serviço</label>
            <input type="text" value={servico} placeholder="Qual serviço?" onChange={(e) => setServico(e.target.value)} />

            <label htmlFor="Mensagem">Mensagem</label>
            <textarea value={mensagem} placeholder="Sua mensagem" onChange={(e) => setMensagem(e.target.value)} />

            <button onClick={handleSubmit}>Enviar</button>
          </Formulario>
        </Container>
      </Section>
    </>
  );
};

export default Contato;
