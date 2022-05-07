import React from 'react'
import styled from 'styled-components'
import CurrencyAction from './CurrencyAction/CurrencyAction'
import CartAction from './CartAction/CartAction'

const StyledActions = styled.div`
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
        <CurrencyAction {...this.props} />
        <CartAction 
          cartItems={this.props.cartItems} 
          currentCurrency={this.props.currentCurrency}
          isCartOverlayOpen={this.props.isCartOverlayOpen}
          toggleIsCartOverlayOpen={this.props.toggleIsCartOverlayOpen}
        />
      </StyledActions>
    )
  }
}