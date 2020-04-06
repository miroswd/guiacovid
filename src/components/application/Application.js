import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import api from '../../services/api';

// import site from '../../assets/simbols/site.svg';
// import googlePlay from '../../assets/simbols/googlePlay.svg';
// import appStore from '../../assets/simbols/appStore.svg';
// import whatsapp from '../../assets/simbols/whatsapp.svg';
// import facebook from '../../assets/simbols/facebook.svg';
// import instagram from '../../assets/simbols/instagram.svg';
// import twitter from '../../assets/simbols/twitter.svg';

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
  doacao,
  estatisticas,
  incentivo,
  noticias,
  oficial,
  perguntas,
  sintomas,
  teste,
];

export default class Application extends Component {
  state = {
    data: [],
    tags: [],
    loading: false,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState({ loading: true });
    const { match } = this.props;
    const title = decodeURIComponent(match.params.title);

    const response = await api.get('/sources/');
    const tagsApi = await api.get('/tags/');
    this.setState({
      data: response.data.find((a) => a.title === title),
      tags: tagsApi.data,
      loading: false,
    });
  };

  render() {
    if (this.state.loading === false && this.state.data.length !== 0) {
      const { tags } = this.state.data;

      // console.log(this.state.data.urls[0].app);

      return (
        <>
          <Header />
          <Container>
            <div className="app-info">
              <div className="logo-app">
                <a href={this.state.data.urls[0].url} target="blank">
                  <img src={this.state.data.image} alt="logo" />
                </a>
              </div>
              <div className="line"></div>

              <div className="group-right">
                <div className="name">
                  <h1>{this.state.data.title}</h1>
                </div>

                <div className="bolinhas">
                  {this.state.data.urls.map((a) => (
                    <a key={a.app} href={a.url} target="_blank">
                      <img
                        src={require('../../assets/simbols/' + a.app + '.svg')}
                        alt={a.app}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="content">
              <div className="tags">
                {tags.map((tag) => (
                  <Link key={tag} to={'/'}>
                    <img src={topics[tag]} alt="app-logo" />
                  </Link>
                ))}
              </div>

              <div className="para">
                <p>{this.state.data.description}</p>
              </div>
            </div>
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
