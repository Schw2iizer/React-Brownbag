import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 50px;
`

class Lifecycle extends Component {
  constructor(props){
    console.log('constructor')
    super(props);

    this.state = {
      count: 0,
    };
  }

  update = () => {
    this.setState({count: this.state.count + 1})
  }

  componentDidMount(){
    console.log('componentDidMount')
    // this.updateValue = setInterval(this.update, 500);
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
    // clearInterval(this.updateValue)
  }

  render() {
    return (
      <>
        <Button onClick={this.update}>{this.state.count}</Button>
        {this.state.date}
      </>
    )
  }
}

class Example extends Component {
  mount = () => {
    ReactDOM.render(<Lifecycle />, document.getElementById('test'))
  }

  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('test'))
  }

  render(){
    return (
      <div>
        <Button onClick={this.mount}>Mount</Button>
        <Button onClick={this.unmount}>UnMount</Button>
        <div id="test"></div>
      </div>
    )
  }
}

export default Example
