import React from 'react'
import styled from 'styled-components'

const StyledCartOverlayPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  text-align: left;
  margin-top: 4px;
`

export default class CartOverlayPrice extends React.Component {
  render() {
    const amount = this.props.prices.filter((el) => el.currency.label === this.props.currentCurrency.label)[0].amount
    return (
      <StyledCartOverlayPrice>
        <span>{this.props.currentCurrency.symbol}{amount}</span>
      </StyledCartOverlayPrice>
    )
  }
}