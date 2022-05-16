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
    if (this.props.globalTotal.length > 0) {
      total = this.props.globalTotal.filter((el) => el.label === this.props.currentCurrency.label)[0].total
      total = Number(total.toFixed(2))
    } else {
      total = 0
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