import React from 'react'
import styled from 'styled-components'
// import CartItemAttribute from '../CartAttribute/CartItemAttribute'
import AttributeItem from '../../../Content/Product/ProductAttributes/AttributeItem/AttributeItem'


const StyledCartDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Brand = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1D1F22;
`

const Name = styled(Brand)`
  font-weight: 400;
  margin-top: 16px;
`

const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #1D1F22;
  margin: 20px 0;
`

export default class CartDescription extends React.Component {
  render() {
    const amount = this.props.prices.filter((el) => el.currency.label === this.props.currentCurrency.label)[0].amount
    const mappedCartItemAttributes = this.props.attributes.map((el) => 
      <AttributeItem 
        key={el.id}
        id={el.id}
        name={el.name}
        items={el.items}
        className='cart'
        type='cart'
      />
    )
    return (
      <StyledCartDescription>
        <Brand>{this.props.brand}</Brand>
        <Name>{this.props.name}</Name>
        <Price>{this.props.currentCurrency.symbol}{amount}</Price>
        { mappedCartItemAttributes }
      </StyledCartDescription>
    )
  }
}