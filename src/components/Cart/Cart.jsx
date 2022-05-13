import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem/CartItem'
import CartOverlayBg from '../Content/CartOverlayBg/CartOverlayBg'

const StyledCart = styled.div`
  width: 1240px;
`

const Header = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  margin: 80px 0 55px 0;
  text-align: left;
  text-transform: uppercase;
`

const TaxContainer = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  height: auto;
  margin: 24px 0;
`

const Tax = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #1D1F22;
  margin: 4px 0;

  & span {
    font-weight: 700;
  }
`

const Qty = styled(Tax)`
`

const Total = styled(Tax)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 170px;
  font-weight: 500;

  & span {
    margin-left: 16px;
  }
`

const Order = styled.button`
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 43px;
  margin: 16px 0;
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
    let mappedItems = this.props.items.map((el) => 
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
      />)
    return (
      <StyledCart>
        <Header>cart</Header>
        { mappedItems }
        <TaxContainer>
          <Tax>Tax: <span></span></Tax>
          <Qty>Qty: <span></span></Qty>
        </TaxContainer>
        <Total>Total: <span>{this.props.currentCurrency.symbol}</span></Total>
        <Order><span>order</span></Order>
      </StyledCart>
    )
  }
}