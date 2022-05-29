import React from 'react'
import styled from 'styled-components'

const AddQuantity = styled.div`
  width: 24px;
`
const Amount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 24px;
  font-weight: 500;
  font-size: 16px;
`

const DecQuantity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: 24px;

  & button {
    margin-right: 0;
  }
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-size: 14px;
  border: 1px solid #1D1F22;
  background-color: #ffffff;
  cursor: pointer;

  &:disabled {
    border: 1px solid #A6A6A6;
    cursor: default;
  }

  &:active:not([disabled]) {
    background-color: #1D1F22;
    color: #ffffff;
    cursor: pointer;
  }
`

export default class Quantity extends React.Component {
  render() {
    return (
      <>
        <AddQuantity>
          <Button onClick={this.props.increaseQuantity}>+</Button>
        </AddQuantity>
        <Amount>{this.props.quantity}</Amount>
        <DecQuantity>
          <Button onClick={this.props.decreaseQuantity}>-</Button>
        </DecQuantity>
      </>
    )
  }
}