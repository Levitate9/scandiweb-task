import React from 'react'
import styled from 'styled-components'
import cart from '../../../../images/cart.png'
import CartOverlay from './CartOverlay/CartOverlay';
import CartActionBadge from './CartActionBadge/CartActionBadge'

const StyledCartAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 0 0 0 15px;

  &:hover {
    cursor: pointer;
  }
`

class CartAction extends React.Component {
  toggleIsOpen() {
    this.props.toggleIsCartOverlayOpen()
  }

  render() {
    return (
      <>
        <StyledCartAction>
          <img src={cart} alt='cart' onClick={this.toggleIsOpen.bind(this)} />
        </StyledCartAction>
        <CartOverlay 
          cartItems={this.props.cartItems} 
          currentCurrency={this.props.currentCurrency} 
          isCartOverlayOpen={this.props.isCartOverlayOpen}
          toggleIsCartOverlayOpen={this.props.toggleIsCartOverlayOpen} 
          currencies={this.props.currencies}
          deleteProductFromCart={this.props.deleteProductFromCart}
          increaseCartItemQuantity={this.props.increaseCartItemQuantity}
          decreaseCartItemQuantity={this.props.decreaseCartItemQuantity}
        />
        { this.props.cartItems.length > 0 && 
            <CartActionBadge 
              amount={this.props.cartItems.length} 
              toggleIsCartOverlayOpen={this.props.toggleIsCartOverlayOpen} 
            /> 
        }
      </>
      
    )
  }
}

export default CartAction