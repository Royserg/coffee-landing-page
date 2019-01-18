import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: palevioletred;
  font-size: 1.2rem;
  color: white;
  padding: 4px;
  border: none;
  width: ${ props => props.small ? "80px" : "100%"};
  height: 40px;
  border-radius: 4px;
  transition: all .5s;
  font-family: 'Lato', sans-serif;

  &:hover {
    cursor: pointer;
    background: #AF5A76;
  }
`

const Button = ({ text, small }) => (
  <StyledButton small={small}>{ text }</StyledButton>
)

export default Button;