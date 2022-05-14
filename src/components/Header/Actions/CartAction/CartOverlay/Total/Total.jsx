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
    return (
      <StyledTotal>
        <span className='total'>Total</span>
        <span className='price'>{this.props.currentCurrency.symbol}{this.props.globalTotal}</span>
      </StyledTotal>
    )
  }
}