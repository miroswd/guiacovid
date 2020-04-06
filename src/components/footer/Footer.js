import React, { Component } from 'react';

import { Container } from './styles';

import api from '../../services/api';

export default class Footer extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    api.get('/sources/').then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <Container>
        <footer>
          <a href="/" className="services">
            {this.state.data.length} Serviços
          </a>
        </footer>
      </Container>
    );
  }
}
