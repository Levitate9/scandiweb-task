import React from 'react'
import styled from 'styled-components'

const StyledCartQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 288px;
  margin: 0 24px 0 0;
`

const Amount = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 38.4px;
`

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  font-weight: 300;
  font-size: 36px;
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

export default class CartQuantity extends React.Component {
  increaseQuantity() {
    this.props.increaseCartItemQuantity(this.props.id)
  }

  decreaseQuantity() {
    this.props.decreaseCartItemQuantity(this.props.id)
  }

  render() {
    return (
      <StyledCartQuantity>
        <Button onClick={this.increaseQuantity.bind(this)}>+</Button>
        <Amount>{this.props.quantity}</Amount>
        <Button onClick={this.decreaseQuantity.bind(this)}>-</Button>
      </StyledCartQuantity>
    )
  }
}