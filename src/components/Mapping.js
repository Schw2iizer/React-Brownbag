import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button';

export default class Mapping extends Component {
  constructor(props){
    super(props);
    this.state = {
      values: []
    };
  }

  componentDidMount() {
    fetch( 'https://swapi.co/api/people/' )
      .then( response => response.json() )
      .then( ({results: values}) => this.setState({ values }) )
  }

  test = () => {
    console.log('clicked')
  }


  render() {
    let values = this.state.values

    return (
      <div>
        {values.map(item =>
          <Button onClick={this.test}>{item.name}</Button >)}
      </div>
    )
  }
}
