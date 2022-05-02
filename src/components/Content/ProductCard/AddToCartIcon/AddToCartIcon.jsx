import React from 'react'
import styled from 'styled-components'
import cart from '../../../../images/whiteCart.png'

const StyledButton = styled.button`
  position: absolute;
  right: 31px;
  bottom: 64px;
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background-color: #1D1F22;
  z-index: 11;

  &.cart:hover,
  &.cart.selected {
    cursor: pointer;
    background-color: #5ECE7B
  }

  & img {
    width: 24px;
    height: 24px;
    margin-left: -2px;
  }
`

export default class AddToCartIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state ={ isSelected: false }
  }

  sendToCart() {
    this.props.sendProductToCart(this.props.id)
    this.toggleSelected()
  }

  deleteFromCart() {
    this.props.deleteProductFromCart(this.props.id)
    this.toggleSelected()
  }

  toggleSelected() {
    this.setState({ isSelected: this.state.isSelected ? false : true })
  }

  render() {
    return (
      <StyledButton 
        className={`cart ${this.state.isSelected ? 'selected' : ''}`} 
        onClick={this.state.isSelected ? this.deleteFromCart.bind(this) : this.sendToCart.bind(this)}
      ><img src={cart} alt='cart' />
      </StyledButton> 
    )
  }
}