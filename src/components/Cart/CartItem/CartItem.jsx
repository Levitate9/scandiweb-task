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
  border-top: 1px solid #E5E5E5;
  padding-top: 24px;
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
    this.state = { quantity: 1 }
    this.addQuantity = this.addQuantity.bind(this)
    this.decQuantity = this.decQuantity.bind(this)
  }

  addQuantity() {
    this.setState({ quantity: this.state.quantity + 1 })
  }

  decQuantity() {
    this.setState({ quantity: this.state.quantity === 1 ? 1 : this.state.quantity - 1 })
  }

  render() {
    return (
      <StyledCartItem>
        <CartDescriptionContainer>
          <CartDescription 
            brand={this.props.brand}
            name={this.props.name}
            currentCurrency={this.props.currentCurrency}
            prices={this.props.prices}
            attributes={this.props.attributes}
          />
          <CartQuantity 
            quantity={this.state.quantity} 
            addQuantity={this.addQuantity} 
            decQuantity={this.decQuantity} />
        </CartDescriptionContainer>
        <CartImage />
      </StyledCartItem>
    )
  }
}