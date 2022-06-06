import React from 'react'
import styled from 'styled-components'

const StyledCartOverlayQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &.cartOverlay {
    height: 190px;
    margin: 0 8px 0 0;
  }

  &.cart {
    height: 288px;
    margin: 0 24px 0 0;
  }
`
const Amount = styled.div`
  font-weight: 500;

  &.cartOverlay {
    font-size: 16px;
    line-height: 26px;
  }

  &.cart {
    font-size: 24px;
    line-height: 38px;
  }
`

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  border: 1px solid #1D1F22;
  background-color: #ffffff;
  user-select: none;
  
  &.cartOverlay {
    width: 24px;
    height: 24px;
    font-size: 14px;
  }

  &.cart {
    width: 45px;
    height: 45px;
    font-size: 25px;
  }

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
      <StyledCartOverlayQuantity className={this.props.type}>
        <Button className={this.props.type} onClick={this.props.increaseQuantity}>+</Button>
        <Amount className={this.props.type}>{this.props.quantity}</Amount>
        <Button className={this.props.type} onClick={this.props.decreaseQuantity}>-</Button>
      </StyledCartOverlayQuantity>
    )
  }
}