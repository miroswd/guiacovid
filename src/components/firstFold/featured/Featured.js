import React, { Component } from 'react';

import { Container, Text } from './styles';

import api from '../../../services/api';

import BackgroundImage from '../../../assets/backgroundImage.svg';

export default class Featured extends Component {
  state = {
    data: [],
    loading: false,
  };

  loadData = async () => {
    this.setState({ loading: true });
    await api.get('/sources/').then((res) => {
      this.setState({ data: res.data }, { loading: false });
    });
  };

  render() {
    if (this.state.loading === false) {
      return (
        <Container>
          <div className="back"></div>
          <Text>
            <h1>Os principais serviços sobre a Covid-19 </h1>
            <p>
              O GuiaCovid reúne as principais plataformas e serviços para você
              se atualizar da melhor maneira.
            </p>
          </Text>

          <img src={BackgroundImage} alt="Imagem-Destaque" />
        </Container>
      );
    } else {
      return <h1>Carregfando</h1>;
    }
  }
}
