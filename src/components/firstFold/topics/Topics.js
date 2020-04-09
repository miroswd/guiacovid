import React, { Component } from 'react';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';
import { Card, Item } from './styles';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Link } from 'react-router-dom';

import topicsData from '../../../assets/topics/topics.json';
export default class Topic extends Component {
  render() {
    // Responsive number topics
    let slider = 6;

    if (window.matchMedia('(max-width:500px)').matches) {
      slider = 1;
    }

    return (
      <Card>
        <Carousel
          slidesPerPage={slider}
          arrows
          infinite
          arrowLeft={
            <TiArrowLeftThick
              name="angle-double-left"
              color="#226faa50"
              fontSize="40px"
              cursor="pointer"
            />
          }
          arrowRight={
            <TiArrowRightThick
              name="angle-double-right"
              color="#226faa50"
              fontSize="40px"
              cursor="pointer"
            />
          }
          addArrowClickHandler
        >
          {topicsData.data.slice(0, 8).map((p) => (
            <Item key={p.id}>
              <Link
                to={{
                  pathname: `/topics/${p.title}`,
                  state: { from: this.props.location },
                }}
              >
                <div className="topic">
                  <div className="logo-topic">
                    <img
                      src={require('../../../assets/topics/' +
                        p.title +
                        '.svg')}
                      alt={p.title}
                    />
                  </div>
                  <span>{p.name}</span>
                </div>
              </Link>
            </Item>
          ))}
        </Carousel>
      </Card>
    );
  }
}
