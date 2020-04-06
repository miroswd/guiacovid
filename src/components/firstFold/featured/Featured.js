import React from 'react';

import { Container, Text } from './styles';

export default function Featured() {
  return (
    <Container>
      <div className="back"></div>
      <Text>
        <h1>Os principais serviços sobre a Covid-19 </h1>
        <p>
          O GuiaCovid reúne as principais plataformas e serviços para você se
          atualizar da melhor maneira.
        </p>
      </Text>

      <img
        src="https://conteudo.imguol.com.br/c/noticias/ef/2019/11/08/andras-arato-ficou-conhecido-como-hide-pain-harold-por-causa-de-seu-sorriso-nervoso-1573231062755_v2_450x337.jpg"
        alt="Imagem-Destaque"
      />
    </Container>
  );
}
