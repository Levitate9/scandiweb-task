import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem/CartItem'
import TotalContainer from './TotalContainer/TotalContainer'

const StyledCart = styled.div`
  width: 1240px;
`

const Header = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  margin: 120px 0 0 0;
  padding-bottom: 55px;
  text-align: left;
  text-transform: uppercase;
  border-bottom: 1px solid #E5E5E5;
`

const Order = styled.button`
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 43px;
  margin: 16px 0 100px 0;
  padding: 16px 32px;
  border: none;
  background-color: #5ECE7B;

  &:hover {
    cursor: pointer;
  }

  & span {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #ffffff;
  }
`

export default class Cart extends React.Component {
  render() {
    let cartItems = this.props.cartItems.length > 0 && this.props.cartItems.sort((a, b) => {
      return a.order - b.order
    })
    let mappedItems = this.props.cartItems.length > 0 && cartItems.map((el) => 
      <CartItem
        key={el.id}
        id={el.id} 
        attributes={el.attributes} 
        brand={el.brand}
        gallery={el.gallery} 
        name={el.name} 
        prices={el.prices} 
        currentCurrency={this.props.currentCurrency}
        type='cart'
        quantity={el.quantity}
        increaseCartItemQuantity={this.props.increaseCartItemQuantity}
        decreaseCartItemQuantity={this.props.decreaseCartItemQuantity}
        deleteProductFromCart={this.props.deleteProductFromCart}
      />)

    return (
      <StyledCart>
        <Header>cart</Header>
        { mappedItems }
        <TotalContainer 
          cartItems={this.props.cartItems} 
          currentCurrency={this.props.currentCurrency}
          calculateTotal={this.props.calculateTotal}
        />
        <Order><span>order</span></Order>
      </StyledCart>
    )
  }
}