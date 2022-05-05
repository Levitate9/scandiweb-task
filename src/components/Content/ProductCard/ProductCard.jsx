import React from 'react'
import styled from 'styled-components'
import ProductCardImage from './ProductCardImage/ProductCardImage'
import AddToCartIcon from './AddToCartIcon/AddToCartIcon'
import ProductCardContent from './ProductCardContent/ProductCardContent'

const StyledProductCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1 1 386px;
  flex-grow: 0;
  height: 444px;
  margin-bottom: 103px;
  background-color: #ffffff;

  &:nth-child(3n+1) {
    margin-left: 100px;
  }

  &:nth-child(3n+2) {
    margin: 0 40px;
  }

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }

  &:hover > .cart,
  & .cart.selected {
    display: flex;
  }

  &.outOfStock {
    box-shadow: none;
  }

  &.inStock > div > .info {
    display: none;
  }

  &.outOfStock > div > .info {
    display: flex;
    background-color: #ffffff;
    opacity: 0.5;
  }
`

export default class ProductCard extends React.Component {
  render() {
    const price = 
      this.props.prices.filter((el) => el.currency.label === this.props.currentCurrency.label)[0].amount
    return (
      <StyledProductCard className={this.props.inStock ? 'inStock' : 'outOfStock'}>
        <ProductCardImage 
          id={this.props.id}
          inStock={this.props.inStock} 
          category={this.props.category} 
          src={this.props.gallery[0]} 
        />
        { this.props.inStock && <AddToCartIcon 
          id={this.props.id}
          sendProductToCart={this.props.sendProductToCart}
          deleteProductFromCart={this.props.deleteProductFromCart}
        /> }
        <ProductCardContent 
          id={this.props.id}
          inStock={this.props.inStock} 
          category={this.props.category}  
          brand={this.props.brand} 
          name={this.props.name}
          symbol={this.props.currentCurrency.symbol} 
          price={price} />
      </StyledProductCard>
    )
  }
}