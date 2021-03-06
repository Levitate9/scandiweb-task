import React from 'react'
import styled from 'styled-components'

const StyledCartActionBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 50%;
  background: #1D1F22;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`

export default class CartActionBadge extends React.Component {
  toggleIsOpen() {
    this.props.toggleIsCartOverlayOpen()
  }
  render() {
    let quantity = this.props.cartItems.reduce((sum, current) => sum + current.quantity, 0)
    return (
      <StyledCartActionBadge onClick={this.toggleIsOpen.bind(this)}>
        { quantity }
      </StyledCartActionBadge>
    )
  }
}