import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard/ProductCard'

const StyledContent = styled.div`
  width: 100%;
  height: calc(100vh - 97px);
  overflow-y: auto;
`

const StyledCategory = styled.div`
  font-size: 42px;
  font-weight: 400;
  text-align: left;
  margin: 80px 0 103px 100px;
  color: #1D1F22;
`

const StyledProducts = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
`

export default class Content extends React.Component {
  render() {
    const category = this.props.currentCategory
    const upperCaseFunc = (text) => text.substring(0, 1).toUpperCase() + text.substring(1)
    const categoryText = category.replace(/^\w/, upperCaseFunc)
    const products = this.props.categories.filter((el) => el.name === category)[0].products
    const mappedProducts = products.map((el) => <ProductCard 
      key={el.id}
      id={el.id}
      name={el.name}
      inStock={el.inStock}
      gallery={el.gallery}
      description={el.description}
      category={el.category}
      attributes={el.attributes}
      prices={el.prices}
      brand={el.brand}
      currentCurrency={this.props.currentCurrency}
    />)
    return (
      <StyledContent>
        <StyledCategory>{categoryText}</StyledCategory>
        <StyledProducts>{mappedProducts}</StyledProducts>
      </StyledContent>
    )
  }
}
