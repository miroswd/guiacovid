import React, { Component } from 'react';
import { Card } from './styles';

import { Link } from 'react-router-dom';

import doacao from '../../../assets/topics/doacao.svg';
import estatisticas from '../../../assets/topics/estatisticas.svg';
import incentivo from '../../../assets/topics/incentivo.svg';
import noticias from '../../../assets/topics/noticias.svg';
import oficial from '../../../assets/topics/oficial.svg';
import perguntas from '../../../assets/topics/perguntas.svg';
import sintomas from '../../../assets/topics/sintomas.svg';
import teste from '../../../assets/topics/teste.svg';
import topicsData from '../../../assets/topics/topics.json';

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

export default class Topic extends Component {
  render() {
    return (
      <Card>
        {topics.slice(0, 6).map((p) => (
          <Link key={p} to={`/App/${encodeURIComponent(p.title)}`}>
            <div className="topic">
              <div className="logo-topic">
                <img src={p} alt="applogo" />
              </div>
              <span>{topicsData.data[topics.indexOf(p)].name}</span>
            </div>
          </Link>
        ))}
      </Card>
    );
  }
}
