import React from 'react'
import styled from 'styled-components'
import CartDescription from './CartDescription/CartDescription'
import CartQuantity from './CartQuantity/CartQuantity'
import CartImage from './CartImage/CartImage'
import ItemRemoveLayer from '../../Actions/CartAction/CartOverlay/Items/Item/ItemRemoveLayer/ItemRemoveLayer'

const StyledCartItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-bottom: 1px solid #E5E5E5;
  padding: 24px 0;
`

const CartDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 1040px;
`

export default class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.increaseQuantity = this.increaseQuantity.bind(this)
    this.decreaseQuantity = this.decreaseQuantity.bind(this)
  }

  increaseQuantity() {
    this.props.increaseCartItemQuantity(this.props.id)
  }

  decreaseQuantity() {
    this.props.decreaseCartItemQuantity(this.props.id)
  }

  render() {
    let itemHeight = 
      document.getElementById(this.props.type) && document.getElementById(this.props.type).clientHeight
    return (
      <StyledCartItem className='cartItem' id={this.props.type}>
        <CartDescriptionContainer>
          <CartDescription 
            brand={this.props.brand}
            name={this.props.name}
            currentCurrency={this.props.currentCurrency}
            prices={this.props.prices}
            attributes={this.props.attributes}
          />
          <CartQuantity
            quantity={this.props.quantity} 
            increaseQuantity={this.increaseQuantity}
            decreaseQuantity={this.decreaseQuantity}
          />
        </CartDescriptionContainer>
        <CartImage gallery={this.props.gallery} />
        <ItemRemoveLayer 
          id={this.props.id}
          brand={this.props.brand}
          name={this.props.name}
          attributes={this.props.attributes}
          quantity={this.props.quantity}
          increaseQuantity={this.increaseQuantity}
          deleteProductFromCart={this.props.deleteProductFromCart}
          type={this.props.type}
          height={itemHeight}
        />
      </StyledCartItem>
    )
  }
}