import React from 'react'
import styled from 'styled-components'
import AttributeItem from './AttributeItem/AttributeItem'
import ProductName from './ProductName/ProductName'
import ProductPrice from './ProductPrice/ProductPrice'
import AddToCart from './AddToCart/AddToCart';
import ProductDescription from './ProductDescription/ProductDescription'

const StyledAttributes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 292px;
`

export default class ProductAttributes extends React.Component {
  render() {
    const mappedAttributeItems = 
      this.props.attributes.map((el) => {
        return <AttributeItem name={el.name} items={el.items} key={el.id} id={el.id} className={el.name} />
      })
    return (
      <StyledAttributes>
        <ProductName brand={this.props.brand} name={this.props.name} />
        { mappedAttributeItems }
        <ProductPrice currentCurrency={this.props.currentCurrency} prices={this.props.prices} 
        />
        <AddToCart id={this.props.id} sendProductToCart={this.props.sendProductToCart} />
        <ProductDescription description={this.props.description} />
      </StyledAttributes>
    )
  }
}