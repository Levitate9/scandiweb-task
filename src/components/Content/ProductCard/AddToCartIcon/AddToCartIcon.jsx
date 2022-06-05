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
  sendToCart() {
    let product = this.props.product
    let attributes = product.attributes.map((attr) => {
      let items = attr.items.map((item, index) => { return { ...item, isSelected: false, order: index + 1 } })
      items = items.sort((a, b) => a.order - b.order)
      return { ...attr, items: items }
    })
    attributes = attributes.map((attr, index) => {
      let item = attr.items[0]
      item = { ...item, isSelected: true }
      return { ...attr, items: [ item, ...attr.items.filter((el) => el.value !== item.value) ], order: index + 1 }
    })
    attributes = attributes.sort((a, b) => a.order - b.order)
    product = { ...product, attributes: attributes }
    this.props.sendProductToCart(product)
  }

  deleteFromCart() {
    this.props.removeProductFromCart(this.props.id)
  }

  render() {
    let itemsOnCart = this.props.cartItems.filter((item) => item.id.includes(this.props.id))
    return (
      <StyledButton 
        id={this.props.id}
        className={`cart ${itemsOnCart.length > 0 ? 'selected' : ''}`} 
        onClick={itemsOnCart.length > 0 ? this.deleteFromCart.bind(this) : this.sendToCart.bind(this)}
      ><img src={cart} alt='cart' />
      </StyledButton> 
    )
  }
}