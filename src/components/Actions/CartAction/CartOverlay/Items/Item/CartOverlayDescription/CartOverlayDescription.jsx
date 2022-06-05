import React from 'react'
import styled from 'styled-components'
import AttributeItem
    from '../../../../../../Content/Product/ProductAttributes/AttributeItem/AttributeItem'

const StyledCartOverlayDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 136px;
  overflow-x: hidden;
  white-space: nowrap;
`

const BrandAndName = styled.div`
`

const Brand = styled.div`
  font-weight: 300;
  font-size: 16px;
  width: 136px;
  line-height: 26px;
  color: #1D1F22;
  text-align: left;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 26px;
    background: linear-gradient(90deg, transparent, #ffffff 50%);
  }
`

const Name = styled(Brand)`
`

const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  text-align: left;
  margin-top: 4px;
`

export default class CartOverlayDescription extends React.Component {
  render() {
    const amount = this.props.prices.filter((el) => el.currency.label === this.props.currentCurrency.label)[0].amount
    const mappedCartOverlayItems = this.props.attributes.map((el) => {
      return <AttributeItem
        id={el.id} 
        key={el.id} 
        name={el.name} 
        items={el.items} 
        className='cartOverlay'
        type='cartOverlay'
      /> 
    })

    return (
      <StyledCartOverlayDescription>
        <BrandAndName>
          <Brand>{this.props.brand}</Brand>
          <Name>{this.props.name}</Name>
        </BrandAndName>
        <Price>{this.props.currentCurrency.symbol}{amount}</Price>
        { mappedCartOverlayItems }
      </StyledCartOverlayDescription>
    )
  }
}