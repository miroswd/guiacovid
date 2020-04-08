import React, { Component } from 'react';
import { ThreeHorseLoading } from 'react-loadingg';

import { Container } from './styles';

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
    console.log(this.state.data);
    this.setState({ topics: topicsApp, loading: false });
  };

  render() {
    if (this.state.loading === false && this.state.data.length !== 0) {
      return (
        <>
          <Header />
          <Container>
            <div className="app-info">
              <div className="logo-app">
                <a href={this.state.data.urls[0].url} target="_blank">
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
                {this.state.topics.map((tag) => (
                  <a key={tag.id} href={`/apps/${tag.id}`}>
                    <img
                      src={require(`../../assets/topics/${tag.title}.svg`)}
                      alt={tag.name}
                    />
                  </a>
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
      return <ThreeHorseLoading />;
    }
  }
}
