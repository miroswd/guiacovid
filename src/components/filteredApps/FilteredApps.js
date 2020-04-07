import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Card, Text } from './styles';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import api from '../../services/api';

import doacao from '../../assets/topics/doacao.svg';
import estatisticas from '../../assets/topics/estatisticas.svg';
import incentivo from '../../assets/topics/incentivo.svg';
import noticias from '../../assets/topics/noticias.svg';
import oficial from '../../assets/topics/oficial.svg';
import perguntas from '../../assets/topics/perguntas.svg';
import sintomas from '../../assets/topics/sintomas.svg';
import teste from '../../assets/topics/teste.svg';
import topicsData from '../../assets/topics/topics.json';

const topics = [
  oficial,
  estatisticas,
  teste,
  perguntas,
  sintomas,
  noticias,
  doacao,
  incentivo,
];

export default class FilteredApp extends Component {
  state = {
    data: [],
    tags: [],
    apps: [],
    tag: [],
    loading: false,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState({ loading: true });
    const { match } = this.props;
    const id = decodeURIComponent(match.params.id);
    const response = await api.get('/sources/');
    const tagsApi = await api.get('/tags/');
    const apps = [];
    this.setState({
      data: response.data.map((a) => a),
      tags: tagsApi.data,
    });
    this.setState({ tag: this.state.tags.find((a) => a.id === Number(id)) });
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].tags.includes(Number(id))) {
        apps.push(this.state.data[i]);
        this.setState({ apps, loading: false });
      }
    }
  };

  render() {
    if (this.state.loading === false && this.state.data.length !== 0) {
      const { tags } = this.state.data;

      //   // console.log(this.state.data.urls[].app);

      {
      }
      return (
        <>
          <Header />
          <Container>
            <div className="app-info">
              <div className="logo-app">
                <img
                  src={topics[this.state.tag.id - 1]}
                  alt={this.state.tag.name}
                />
              </div>
              <div className="line"></div>
              <div className="group-right">
                <div className="name">
                  <h1>{this.state.tag.name}</h1>
                </div>
              </div>
            </div>

            <div className="content">
              <div className="tags">
                {this.state.tags.map((tag) => (
                  <Link key={tag} to={'/'}>
                    <img src={topics[tag.id - 1]} alt="app-logo" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="para">
              {this.state.apps.map((app) => (
                <Link
                  onClick={this.isLoading}
                  key={app.id}
                  to={`/App/${encodeURIComponent(app.title)}`}
                >
                  <Card>
                    <div className="logo-app">
                      <img src={app.image} alt={app.title} />
                    </div>
                    <Text>
                      <span>{app.title}</span>
                      <p>{app.description}</p>
                    </Text>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="para"></div>
          </Container>
          <Footer />
        </>
      );
    } else {
      return (
        <div>
          <h1>Carregando</h1>
        </div>
      );
    }
  }
}
