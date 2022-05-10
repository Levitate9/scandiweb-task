import React from 'react'
import styled from 'styled-components'
import CartItemAttributeValue from './CartItemAttributeValue/CartItemAttributeValue'

const StyledAttribute = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const AttributeName = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1D1F22;
  text-transform: uppercase;
  margin-bottom: 8px;
`

export default class CartItemAttribute extends React.Component {
  render() {
    console.log(this.props.items)
    const mappedValues = this.props.items.map((el) => 
      <CartItemAttributeValue 
        key={el.id}
        id={el.id}
        value={el.value}
        displayValue={el.displayValue}
      />
    )
    return (
      <StyledAttribute>
        <AttributeName>{this.props.name}:</AttributeName>
        { mappedValues }
      </StyledAttribute>
    )
  }
}