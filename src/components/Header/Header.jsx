import React from 'react'
import styled from 'styled-components'
import Categories from './Categories/Categories'
import Logo from './Logo/Logo'
import Actions from './Actions/Actions'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 1240px;
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
          toggleCurrency={this.props.toggleCurrency}
          cartItems={this.props.cartItems} 
        />
      </StyledHeader>
    )
  }
}