import React from 'react'
import styled from 'styled-components'
import Header from './Header/Header'
import Items from './Items/Items'
import Total from './Total/Total'
import Buttons from './Buttons/Buttons'

const StyledCartOverlay = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  top: 78px;
  right: 72px;
  width: 325px;
  max-height: 677px;
  z-index: 15;
  background-color: #ffffff;

  &.open {
    display: flex;
  }
`

export default class CartOverlay extends React.Component {
  render() {
    return (
      <>
        <StyledCartOverlay className={this.props.isCartOverlayOpen ? 'open' : ''}>
          <Header cartLength={this.props.cartItems.length} />
          <Items cartItems={this.props.cartItems} currentCurrency={this.props.currentCurrency} />
          <Total />
          <Buttons cartLength={this.props.cartItems.length} />
        </StyledCartOverlay>
      </>
    )
  }
}
