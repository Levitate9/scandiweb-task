import React from 'react'
import styled from 'styled-components'

const StyledAddToCart = styled.button`
  width: 292px;
  height: 52px;
  margin: 0 0 20px 0;
  padding: 16px 32px;
  text-transform: uppercase;
  border: none;
  color: #ffffff;
  background-color: #5ECE7B;

  &:hover {
    cursor: pointer;
  }

  & span {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`

export default class AddToCart extends React.Component {
  render() {
    return (
      <StyledAddToCart><span>add to cart</span></StyledAddToCart>
    )
  }
}