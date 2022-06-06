import React from 'react'
import styled from 'styled-components'
import CurrencyAction from './CurrencyAction/CurrencyAction'
import CartAction from './CartAction/CartAction'
import BackdropLayer from './BackdropLayer/BackdropLayer'

const StyledActions = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 10 1 35vw;
  margin-right: 100px;
`

export default class Actions extends React.Component {
  render() {
    return (
      <StyledActions>
        <CurrencyAction 
          currentCurrency={this.props.currentCurrency} 
          currencies={this.props.currencies}
          setCurrency={this.props.setCurrency}
          isCurrencySwitcherOpen={this.props.isCurrencySwitcherOpen}
          toggleIsCurrencySwitcherOpen={this.props.toggleIsCurrencySwitcherOpen}
        />
        <CartAction 
          cartItems={this.props.cartItems} 
          currentCurrency={this.props.currentCurrency}
          isCartOverlayOpen={this.props.isCartOverlayOpen}
          toggleIsCartOverlayOpen={this.props.toggleIsCartOverlayOpen}
          currencies={this.props.currencies}
          deleteProductFromCart={this.props.deleteProductFromCart}
          increaseCartItemQuantity={this.props.increaseCartItemQuantity}
          decreaseCartItemQuantity={this.props.decreaseCartItemQuantity}
          calculateTotal={this.props.calculateTotal}
        />
        <BackdropLayer 
          isCartOverlayOpen={this.props.isCartOverlayOpen}
          isCurrencySwitcherOpen={this.props.isCurrencySwitcherOpen}
          toggleIsCartOverlayOpen={this.props.toggleIsCartOverlayOpen}
          toggleIsCurrencySwitcherOpen={this.props.toggleIsCurrencySwitcherOpen}
        />
      </StyledActions>
    )
  }
}