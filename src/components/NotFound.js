import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Text } from '../components/firstFold/featured/styles';

import '../global.css';

import BackgroundImage from '../assets/backgroundImage.svg';

import Header from './header/Header';
import Footer from './footer/Footer';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Container>
        <div className="back">
          <Text>
            <h1>Error 404</h1>
            <p>
              A página que você está procurando, não existe. Retorne à página
              principal, para ter acesso ao conteúdo.
            </p>
            <Link to={'/'}>Voltar ao início</Link>
          </Text>

          <img src={BackgroundImage} alt="Imagem-Destaque" />
        </div>
      </Container>

      <Footer />
    </div>
  );
}
