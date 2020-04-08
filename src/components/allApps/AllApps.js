import React, { Component } from 'react';

import { Container, Card, Text } from './styles';

import { Link } from 'react-router-dom';

import api from '../../services/api';

export default class AllApps extends Component {
  state = {
    data: [],
    loading: false,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState({ loading: true });
    await api.get('/sources/').then((res) => {
      this.setState({ data: res.data, loading: false });
    });
  };

  removeVirgula = (desc) => {
    if (
      desc.substr(-1, 1) === ',' ||
      desc.substr(-1, 1) === '.' ||
      desc.substr(-1, 1) === ' '
    ) {
      return desc.slice(0, desc.indexOf(' ', 80));
    }
    return desc;
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
                <p>
                  {this.removeVirgula(
                    app.description.slice(0, app.description.indexOf(' ', 70))
                  )}
                  ...
                </p>
              </Text>
            </Card>
          </Link>
        ))}
      </Container>
    );
  }
}
