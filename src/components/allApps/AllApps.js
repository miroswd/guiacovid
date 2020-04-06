import React, { Component } from 'react';

import { Container, Card, Text } from './styles';

import { Link } from 'react-router-dom';

import api from '../../services/api';

export default class AllApps extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState({ loading: true });
    await api.get('/sources/').then((res) => {
      this.setState({ data: res.data });
    });
  };

  render() {
    return (
      <Container>
        {this.state.data.map((app) => (
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
      </Container>
    );
  }
}
