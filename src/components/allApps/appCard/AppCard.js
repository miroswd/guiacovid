import React from 'react';

import { Card, Text } from './styles';

export default function AppCard() {
  return (
    <Card>
      <img
        src="https://jornalboavista.com.br/site/wp-content/uploads/2020/02/coronavirus-e-chernobyl.jpg"
        alt="Logo-app"
      />
      <Text>
        <span>Nome</span>
        <p>Descrição</p>
      </Text>
    </Card>
  );
}
