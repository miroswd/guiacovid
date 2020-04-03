import React from 'react';

import { Container } from './styles';

import Header from './header/Header';
import Featured from './featured/Featured';
import Topics from './topics/Topics';

export default function FirstFold() {
  return (
    <Container>
      <Header />
      <Featured />
      <Topics />
    </Container>
  );
}
