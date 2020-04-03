import React from 'react';

import { Container } from './styles';

import AppCard from './appCard/AppCard';

export default function AllApss() {
  const data = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 4];

  return (
    <Container>
      {data.map((app) => (
        <AppCard />
      ))}
    </Container>
  );
}
