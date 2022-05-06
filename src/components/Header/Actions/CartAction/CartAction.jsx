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
  margin: 0 0 0 15px;

  &:hover {
    cursor: pointer;
  }
`

class CartAction extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.toggleIsOpen = this.toggleIsOpen.bind(this)
  }

  toggleIsOpen() {
    this.setState({ isOpen: this.state.isOpen ? false : true })
  }

  render() {
    return (
      <>
        <StyledCartAction>
          <img src={cart} alt='cart' onClick={this.toggleIsOpen} />
        </StyledCartAction>
        <CartOverlay 
          cartItems={this.props.cartItems} 
          currentCurrency={this.props.currentCurrency} 
          isOpen={this.state.isOpen}
          toggleIsOpen={this.toggleIsOpen}
        />
      </>
      
    )
  }
}

export default CartAction