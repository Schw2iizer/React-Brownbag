import React, {Component} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const VinInput = styled.input`
  height: 25px;
  width: 280px;
  padding: 5px;
  border-radius: 5px;
  font-size: 25px;
  text-align: center;
`

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  handleEnter = (event) => {
    if (event.key === "Enter" && this.props.submit) {
      this.props.submit(event);
    } else {
      return;
    }
  }

  render() {
    return (
      <VinInput
        onChange={this.props.onChange}
        name={this.props.name}
        id={this.props.id}
        className={this.props.className}
        onKeyUp={this.handleEnter}
        maxLength={this.props.maxLength || 17}
        required={this.props.required}
        placeholder={this.props.placeholder || undefined}/>
    )
  }
}
