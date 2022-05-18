import React from 'react'
import styled from 'styled-components'

const StyledTotalContainer = styled.div`
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  height: auto;
  margin: 24px 0;
`

const KeysColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100px;
  margin-right: 10px;
`

const ValuesColumn = styled(KeysColumn)`
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

const TaxValue = styled(Tax)`
  font-weight: 700;
`

const Quantity = styled(Tax)`
`

const QuantityValue = styled(TaxValue)`
`

const Total = styled(Tax)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;

  & span {
    margin-left: 16px;
  }
`

const TotalValue = styled(TaxValue)`
`

export default class TotalContainer extends React.Component {
  render() {
    let total = this.props.calculateTotal(this.props.cartItems, this.props.currentCurrency)
    let symbol = this.props.currentCurrency.symbol
    let tax = Number((total * 0.21).toFixed(2))
    let qtyArr = this.props.cartItems.map((el) => { return el.quantity })
    let qty = qtyArr.reduce((sum, current) => { return sum + current}, 0) 

    return (
      <StyledTotalContainer>
        <KeysColumn>
          <Tax>Tax 21%:</Tax>
          <Quantity>Quantity:</Quantity>
          <Total>Total:</Total>
        </KeysColumn>
        <ValuesColumn>
          <TaxValue>{symbol}{tax}</TaxValue>
          <QuantityValue>{qty}</QuantityValue>
          <TotalValue>{symbol}{total}</TotalValue>
        </ValuesColumn>
      </StyledTotalContainer>
    )
  }
}