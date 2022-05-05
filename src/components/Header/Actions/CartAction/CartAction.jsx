import React from 'react'
import styled from 'styled-components'
import cart from '../../../../images/cart.png'
import CartOverlay from './CartOverlay/CartOverlay';

const StyledCartAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0 0 0 15px;
`

class CartAction extends React.Component {
  render() {
    return (
      <>
        <StyledCartAction>
          <img src={cart} alt='cart' />
        </StyledCartAction>
        <CartOverlay cartItems={this.props.cartItems} currentCurrency={this.props.currentCurrency} />
      </>
      
    )
  }
}

export default CartAction