import React from 'react'
import styled from 'styled-components'
import Header from './Header/Header'
import Items from './Items/Items'
import Total from './Total/Total'
import Buttons from './Buttons/Buttons'

const StyledBackground = styled.div`
  z-index: 14;
  width: 1440px;
  height: 100%;
  background: rgba(57, 55, 72, 0.22);
  position: fixed;
  top: 78px;
  overflow: hidden;
  display: none;
`

const StyledCartOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  top: 78px;
  left: 1028px;
  width: 325px;
  max-height: 677px;
  z-index: 15;
  background-color: #ffffff;
`

export default class CartOverlay extends React.Component {
  render() {
    return (
      <>
        <StyledCartOverlay>
          <Header cartLength={this.props.cartItems.length} />
          <Items cartItems={this.props.cartItems} currentCurrency={this.props.currentCurrency} />
          <Total />
          <Buttons cartLength={this.props.cartItems.length} />
        </StyledCartOverlay>
        <StyledBackground></StyledBackground>
      </>
    )
  }
}
