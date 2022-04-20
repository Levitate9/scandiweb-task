import React from 'react'
import styled from 'styled-components'
import CurrencyAction from './CurrencyAction/CurrencyAction'
import CartAction from './CartAction/CartAction';
import CartOverlay from '../Actions/CartAction/CartOverlay/CartOverlay'


const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 10 1 35vw;
`

export default class Actions extends React.Component {
  render() {
    return (
      <StyledActions>
        <CurrencyAction {...this.props} />
        <CartAction />
        <CartOverlay cartItems={this.props.cartItems} />
      </StyledActions>
    )
  }
}