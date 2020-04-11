import React, { Component } from 'react';
import { ThreeHorseLoading } from 'react-loadingg';

import { Link } from 'react-router-dom';

import { Container, Logo, Tags, Social } from './styles';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import api from '../../services/api';

import topicsData from '../../assets/topics/topics.json';

export default class Application extends Component {
  state = {
    data: [],
    tags: [],
    topics: [],
    loading: false,
  };
  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState({ loading: true });

    let topicsApp = [];
    const { match } = this.props;
    const title = decodeURIComponent(match.params.title);

    const response = await api.get('/sources/');
    const tagsApi = await api.get('/tags/');
    this.setState({
      data: response.data.find((a) => a.title === title),
      tags: tagsApi.data,
    });
    this.state.data.tags.map((a) => {
      return topicsApp.push(topicsData.data.find((tag) => tag.id === a));
    });
    this.setState({ topics: topicsApp, loading: false });
  };

  render() {
    if (this.state.loading === false && this.state.data.length !== 0) {
      return (
        <div className="container">
          <Header />

          <Container>
            <Link
              to={{ pathname: `${this.state.data.urls[0].url}` }}
              target="_blank"
            >
              <Logo>
                <img src={this.state.data.image} alt="logo" />
              </Logo>
            </Link>

            <div className="line"></div>

            <h1>{this.state.data.title}</h1>

            <Social>
              {this.state.data.urls.map((a) => (
                <Link
                  key={a.app}
                  to={{
                    pathname: `${a.url}`,
                    state: { from: this.props.location },
                  }}
                  target="_blank"
                >
                  <img
                    src={require('../../assets/simbols/' + a.app + '.svg')}
                    alt={a.app}
                  />
                </Link>
              ))}
            </Social>
            <Tags>
              {this.state.topics.map((tag) => (
                <Link key={tag.id} to={`/topics/${tag.title}`}>
                  <img
                    src={require(`../../assets/topics/${tag.title}.svg`)}
                    alt={tag.name}
                  />
                </Link>
              ))}
            </Tags>

            <p>{this.state.data.description}</p>
          </Container>
          <Footer />
        </div>
      );
    } else {
      return <ThreeHorseLoading />;
    }
  }
}
