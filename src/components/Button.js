import React from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
  width: 200px;
  height: 35px;
  color: #fff;
  background-color: rgba(61,151,229,1);
  cursor: pointer;
  font-size: 25px;
  border-radius: 5px;
`
export default function Button(props) {
  return (
    <SubmitButton onClick={props.onClick}>{props.children}</SubmitButton>
  )
}
