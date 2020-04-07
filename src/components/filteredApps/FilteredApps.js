import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ThreeHorseLoading } from 'react-loadingg';
import { Container, Card, Text } from './styles';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import api from '../../services/api';


import topicsData from '../../assets/topics/topics.json';

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
    const id = Number(decodeURIComponent(match.params.id));
    const response = await api.get('/sources/');
    const tagsApi = await api.get('/tags/');
    const apps = [];
    this.setState({
      data: response.data.map((a) => a),
      tags: tagsApi.data,
    });
    this.setState({ tag:topicsData.data.find((a) => a.id === id) });
    if (this.state.data.map(a => a.tags.includes(id))){
      apps.push(this.state.data.map(a => a.tags.includes(id)))
    } 
let tagApps = []
    for (let i = 0; i < this.state.data.length; i++){
      if (apps[0][i] === true){
        tagApps.push(this.state.data[i])
        this.setState({tags:tagApps})
      }
    }
    this.setState({ apps, loading: false });
  
  }
    


  render() {
    if (this.state.loading === false && this.state.data.length !== 0) {
      const { tags } = this.state.data;

      //   // console.log(this.state.data.urls[].app);


      {
       console.log(this.state.tags)
          }
        
      return (
        <>
          <Header />
          <Container>
            <div className="app-info">
              <div className="logo-app">
                <img
                  src={require(`../../assets/topics/${this.state.tag.title}.svg`)}
                  alt={this.state.tag.name}
                />
              </div>
            </div>
              <div className="line"></div>
              <div className="group-right">
                <div className="name">
                  <h1>{this.state.tag.name.toUpperCase()}</h1>
                </div>
              </div>

            <div className="content">
              <div className="tags">
                {topicsData.data.map( a => (
                  <Link key={a.title} to={`/apps/${a.id}`}>
                    <img src={require(`../../assets/topics/${a.title}.svg`)} alt={a.name} />
                    <span>{a.name}</span>
                  </Link>
                ))}
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
