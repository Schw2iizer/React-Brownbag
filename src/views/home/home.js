import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';
import apiUtils from '../../api/apiUtils';

const Container = styled.div`
  width: 50%;
  height: 500px;
  margin: 0 auto;
    &::after {
    content: "";
    background: url(tesla.jpeg);
    background-repeat: no-repeat;
    background-position: center;

    opacity: 0.3;
    top: -300px;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`

const Title = styled.h1`
  text-align: center;
`

const InputContainer = styled.div`
  text-align: center;
  display; flex;
  flex-direction: column;
  input {
    margin-bottom: 10px;
  }
`

const Image = styled.img`
  text-align: center;
  width: 800px;
  height: auto;
`


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vin: undefined,
      results: {}
    };
  }

  getVin = async () => {
    let results = await apiUtils.get(this.state.vin);
    if (!results) return this.setState({results: 'Invalid VIN'})
    this.setState({ results: results.specification })
  }

  onChange = (event) => {
    this.setState({vin: event.target.value})
  }

  render() {
    const {
      anti_brake_system,
      city_mileage,
      engine,
      fuel_type,
      highway_mileage,
      made_in,
      make,
      model,
      overall_height,
      overall_length,
      overall_width,
      standard_seating,
      style,
      tank_size,
      trim_level,
      vin,
      year
    } = this.state.results
    return (
      <Container>
        <Title>FREE VIN Check</Title>
        <InputContainer>
          <Input name="vin" placeholder="Enter VIN number" onChange={this.onChange}/>
          <Button onClick={this.getVin}>Check VIN</Button>
        </InputContainer>
        {this.state.vin}

        {vin && (
          <>
            <div>VIN: {vin}</div>
            <div>{year} {make} {model} {trim_level}</div>
            <div>Engine: {engine}</div>
            <div>Style: {style}</div>
            <div>Anti-Brake System: {anti_brake_system}</div>
            <div>Made In: {made_in}</div>
            <div>Seats: {standard_seating}</div>
            <div>City mileage: {city_mileage}</div>
            <div>Highway mileage: {highway_mileage}</div>
            <div>Dimensions:</div>
            <div>Overall Height: {overall_height}</div>
            <div>Overall Length: {overall_length}</div>
            <div>Overall Width: {overall_width}</div>
          </>
        )}

      </Container>
    )
  }

}
