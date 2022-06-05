import React from 'react'
import styled from 'styled-components'

const StyledCartOverlayQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 190px;
  margin: 0 8px 0 0;
`
const Amount = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 25.6px;
`

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-weight: 300;
  font-size: 14px;
  border: 1px solid #1D1F22;
  background-color: #ffffff;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    border: 1px solid #A6A6A6;
    cursor: default;
  }

  &:active:not([disabled]) {
    background-color: #1D1F22;
    color: #ffffff;
    cursor: pointer;
  }
`

export default class CartOverlayQuantity extends React.Component {
  render() {
    return (
      <StyledCartOverlayQuantity>
        <Button onClick={this.props.increaseQuantity}>+</Button>
        <Amount>{this.props.quantity}</Amount>
        <Button onClick={this.props.decreaseQuantity}>-</Button>
      </StyledCartOverlayQuantity>
    )
  }
}