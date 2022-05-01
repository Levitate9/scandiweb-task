import React from 'react'
import styled from 'styled-components'

const StyledCurrencyItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 99px;
  height: 45px;
  padding-left: 15px;

  &:hover {
    background-color: #EEEEEE;
    cursor: pointer;
  }

  &:first-child {
    margin-top: 15px;
  }

  &:last-child {
    margin-bottom: 15px;
  }
`

const Symbol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28.8px;
  color: #1D1F22;
  user-select: none;
`

const Label = styled(Symbol)`
  align-items: flex-start;
  width: 35px;
  margin-left: 5px;
`

export default class CurrencyItem extends React.Component {
  toggleCurrency(e) {
    this.props.setCurrency(e.target.innerHTML)
    this.props.toggleIsOpen()
  }

  render() {
    return (
      <StyledCurrencyItem onClick={this.toggleCurrency.bind(this)}>
        <Symbol>{this.props.symbol}</Symbol>
        <Label>{this.props.label}</Label>
      </StyledCurrencyItem>
    )
  }
}