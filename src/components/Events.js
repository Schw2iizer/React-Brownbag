import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.textarea`
  margin: 0 auto;
`

export default class Textarea extends Component {
  constructor(props){
    super(props);
    this.state = {
      event: ''
    };
  }

  showEvent = (e) => {
    this.setState({event: e.type})
  }


  render() {
    return (
      <>
        <textarea
          cols="80"
          rows="20"
          onClick={this.showEvent}
          onBlur={this.showEvent}
          onWheel={this.showEvent}
          onTouchStart={this.showEvent}
          onDoubleClick={this.showEvent}
        />
        <h2>{this.state.event}</h2>
      </>
    )
  }
}
