import React, { Component, useState } from 'react';

import api from './services/api';
// export default class Person extends Component {
//   state = {
//     persons: [],
//   };

//   componentDidMount() {
//     api.get('/sources/').then((res) => {
//       console.log(res);
//       this.setState({ persons: res.data });
//     });
//   }

//   render() {
//     return <h1>{this.state.persons.map((p) => p.title)}</h1>;
//   }
// }

export default function Person() {
  let [person, setPerson] = useState();

  api.get('/sources/').then((res) => {
    console.log('res' + res.data);
    setPerson({ person: res.data });
  });

  console.log(person);
  return <h1>{person.map((p) => p.title)}</h1>;
}
