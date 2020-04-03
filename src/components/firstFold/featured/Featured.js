import React from 'react';

import { Container, Text } from './styles';

export default function Featured() {
  return (
    <Container>
      <div className="back"></div>
      <Text>
        <h1>
          Título da postagem que será feita, na verdade aqui entrará um título
          da página
        </h1>
        <p>
          Aqui será uma descrição, acho que vai ser o propósito da plataforma
        </p>
      </Text>

      <img
        src="https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2020/02/coronavirus-418x235.jpg"
        alt="Imagem-Destaque"
      />
    </Container>
  );
}
