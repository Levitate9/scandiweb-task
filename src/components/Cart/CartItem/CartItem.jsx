import React from 'react'
import styled from 'styled-components'
import CartDescription from './CartDescription/CartDescription'
import CartQuantity from './CartQuantity/CartQuantity'
import CartImage from './CartImage/CartImage'

const StyledCartItem = styled.div`
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
  render() {
    return (
      <StyledCartItem className='cartItem'>
        <CartDescriptionContainer>
          <CartDescription 
            brand={this.props.brand}
            name={this.props.name}
            currentCurrency={this.props.currentCurrency}
            prices={this.props.prices}
            attributes={this.props.attributes}
          />
          <CartQuantity
            id={this.props.id} 
            quantity={this.props.quantity} 
            increaseCartItemQuantity={this.props.increaseCartItemQuantity}
            decreaseCartItemQuantity={this.props.decreaseCartItemQuantity}
          />
        </CartDescriptionContainer>
        <CartImage gallery={this.props.gallery} />
      </StyledCartItem>
    )
  }
}