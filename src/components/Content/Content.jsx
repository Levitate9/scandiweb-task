import React from 'react'
import styled from 'styled-components'
import Product from './Product/Product'

const StyledContent = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  overflow-y: auto;
`

const StyledCategory = styled.div`
  font-size: 42px;
  font-weight: 400;
  text-align: left;
  margin: 80px 0 103px 100px;
`

const StyledProducts = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
`

export default class Content extends React.Component {
  render() {
    const products = this.props.categories.filter((el) => el.name === 'all')[0].products
    const category = 'all'
    const mappedProducts = products.map((el) => <Product 
      key={el.id}
      category={el.category}
      description={el.description}
      gallery={el.gallery}
      id={el.id}
      inStock={el.inStock}
      name={el.name} 
    />)
    return (
      <StyledContent>
        <StyledCategory>{category}</StyledCategory>
        <StyledProducts>{mappedProducts}</StyledProducts>
      </StyledContent>
    )
  }
}
