import React from 'react'
import styled from 'styled-components'
import Categories from './Categories/Categories'
import Logo from './Logo/Logo'
import Actions from './Actions/Actions'

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: 15;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 1440px;
`

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Categories categories={this.props.categories} setCategory={this.props.setCategory} />
        <Logo />
        <Actions 
          currencies={this.props.currencies}
          currentCurrency={this.props.currentCurrency}
          setCurrency={this.props.setCurrency}
          cartItems={this.props.cartItems}
          isCartOverlayOpen={this.props.isCartOverlayOpen}
          toggleIsCartOverlayOpen={this.props.toggleIsCartOverlayOpen}
          deleteProductFromCart={this.props.deleteProductFromCart}
          increaseCartItemQuantity={this.props.increaseCartItemQuantity}
          decreaseCartItemQuantity={this.props.decreaseCartItemQuantity}
          calculateTotal={this.props.calculateTotal}
        />
      </StyledHeader>
    )
  }
}