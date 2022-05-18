import React from 'react'
import styled from 'styled-components'

const StyledTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 310px;
  padding: 16px;

  & .total {
    font-weight: 600;
  }

  & .price {
    font-weight: 700;
  }
`

export default class Total extends React.Component {
  render() {  
    let total
    let totalArr = this.props.cartItems.length > 0 &&
      this.props.cartItems.map((el) => {
        let amount = el.prices.filter((price) => price.currency.label === this.props.currentCurrency.label)[0].amount
        return amount * el.quantity
      })
    if (this.props.cartItems.length === 0) {
      total = 0
    } else {
      total = totalArr.reduce((sum, current) => { return sum + current }, 0)
      total = Number(total.toFixed(2))
    }

    return (
      <StyledTotal>
        <span className='total'>Total</span>
        <span className='price'>
          {this.props.currentCurrency.symbol}{total}
        </span>
      </StyledTotal>
    )
  }
}