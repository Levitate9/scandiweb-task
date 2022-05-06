import React from 'react'
import styled from 'styled-components'
import Header from './Header/Header'
import Items from './Items/Items'
import Total from './Total/Total'
import Buttons from './Buttons/Buttons'

const StyledBackground = styled.div`
  position: fixed;
  display: none;
  width:1440px;
  height: 100vh;
  top: 78px;
  background: rgba(57, 55, 72, 0.22);
  z-index: 14;

  &.open {
    display: block;
  }
`

const StyledCartOverlay = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  top: 78px;
  right: -28px;
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
    console.log(this.props)
    return (
      <>
        <StyledCartOverlay className={this.props.isOpen ? 'open' : ''}>
          <Header cartLength={this.props.cartItems.length} />
          <Items cartItems={this.props.cartItems} currentCurrency={this.props.currentCurrency} />
          <Total />
          <Buttons cartLength={this.props.cartItems.length} />
        </StyledCartOverlay>
        <StyledBackground 
          className={this.props.isOpen ? 'open' : ''}
          onClick={this.props.toggleIsOpen}
        ></StyledBackground>
      </>
    )
  }
}
