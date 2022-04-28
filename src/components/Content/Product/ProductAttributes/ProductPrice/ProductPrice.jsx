import React from 'react'
import styled from 'styled-components'

const StyledPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const StyledPriceCategory = styled.div`
  font-family: 'Roboto Condensed';
  font-style: 'normal';
  font-weight: 700;
  font-size: 18px;
  margin: 24px 0 0 0;
  line-height: 18px;
  color: #1D1F22;
  text-transform: uppercase;
`

const StyledAmount = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  color: #1D1F22;
  margin: 10px 0 20px 0;
`

export default class ProductPrice extends React.Component {
  render() {
    const symbol = this.props.currentCurrency.symbol
    const amount = this.props.prices.filter((el) => el.currency.label === this.props.currentCurrency.label)[0].amount
    return (
      <StyledPrice>
        <StyledPriceCategory>price:</StyledPriceCategory>
        <StyledAmount>{`${symbol}${amount}`}</StyledAmount>
      </StyledPrice>
    )
  }
}