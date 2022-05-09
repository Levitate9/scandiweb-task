import React from 'react'
import styled from 'styled-components'

const StyledCartItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

const Brand = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1D1F22;
`

const Name = styled(Brand)`
  font-weight: 400;
`

const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #1D1F22;
`

export default class CartItem extends React.Component {
  render() {
    console.log(this.props.prices)
    const amount = this.props.prices.filter((el) => el.currency.label === this.props.currentCurrency.label)[0].amount
    return (
      <StyledCartItem>
        <hr />
        <Brand>{this.props.brand}</Brand>
        <Name>{this.props.name}</Name>
        <Price>{this.props.currentCurrency.symbol}{amount}</Price>
      </StyledCartItem>
    )
  }
}