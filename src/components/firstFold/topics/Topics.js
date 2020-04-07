import React, { Component } from 'react';
import { Card } from './styles';

import { Link } from 'react-router-dom';

import topicsData from '../../../assets/topics/topics.json';

export default class Topic extends Component {
  render() {
    return (
      <Card>
        {topicsData.data.slice(0, 6).map((p) => (
          <Link key={p.id} to={`/apps/${p.id}`}>
            <div className="topic">
              <div className="logo-topic">
                <img
                  src={require('../../../assets/topics/' + p.title + '.svg')}
                  alt={p.title}
                />
              </div>
              <span>{p.name}</span>
            </div>
          </Link>
        ))}
      </Card>
    );
  }
}
