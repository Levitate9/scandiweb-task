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
        id={this.props.id}
        isSelected={this.state.isSelected}
        className={`cart ${this.state.isSelected ? 'selected' : ''}`} 
        onClick={this.state.isSelected ? this.deleteFromCart.bind(this) : this.sendToCart.bind(this)}
      ><img src={cart} alt='cart' />
      </StyledButton> 
    )
  }
}