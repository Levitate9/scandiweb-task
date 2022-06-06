import React from 'react'
import styled from 'styled-components'
import AttributeItem
    from '../../../../../../Content/Product/ProductAttributes/AttributeItem/AttributeItem'

const StyledCartOverlayDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.cartOverlay {
    justify-content: space-between;
    position: relative;
    width: 136px;
    overflow-x: hidden;
    white-space: nowrap;
  }

  &.cart {
    justify-content: flex-start;
  }
`

const Brand = styled.div`
  color: #1D1F22;

  &.cartOverlay {
    font-weight: 300;
    font-size: 16px;
    width: 136px;
    line-height: 26px;
    text-align: left;
  }
  
  &.cartOverlay:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 26px;
    background: linear-gradient(90deg, transparent, #ffffff 50%);
  }

  &.cart {
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    text-align: left;
  }
`

const Name = styled(Brand)`
  &.cart {
    font-weight: 400;
    margin-top: 16px;
  }
`

const Price = styled.div`
  &.cartOverlay {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align: left;
    margin-top: 4px;
  }

  &.cart {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    margin: 20px 0;
  }
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
        className={this.props.type}
        type={this.props.type}
      /> 
    })

    return (
      <StyledCartOverlayDescription className={this.props.type}>
        <div>
          <Brand className={this.props.type}>{this.props.brand}</Brand>
          <Name className={this.props.type}>{this.props.name}</Name>
        </div>
        <Price className={this.props.type}>{this.props.currentCurrency.symbol}{amount}</Price>
        { mappedCartOverlayItems }
      </StyledCartOverlayDescription>
    )
  }
}