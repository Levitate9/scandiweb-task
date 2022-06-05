import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard/ProductCard'
import { GET_CATEGORY_PRODUCTS } from '../../graphql/Queries'

const StyledContent = styled.div`
  position: relative;
  width: 100%;
  top: 80px;
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
  constructor(props) {
    super(props)
    this.state = { products: [] }
    this.getCategoryProducts = this.getCategoryProducts.bind(this)
  }

  getCategoryProducts() {
    this.props.client
      .query({ query: GET_CATEGORY_PRODUCTS, variables: { "name": { "title": this.props.currentCategory } } })
      .then((result) => this.setState({ products: result.data.category.products }))
  }

  componentDidMount() {
    this.getCategoryProducts()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentCategory !== this.props.currentCategory) {
      this.getCategoryProducts()
    }
  }

  render() {
    const upperCaseFunc = (text) => text.substring(0, 1).toUpperCase() + text.substring(1)
    const categoryText = this.props.currentCategory.replace(/^\w/, upperCaseFunc)
    const mappedProducts = this.state.products.length > 0 && this.state.products.map((el) => {
      return <ProductCard 
        key={el.id}
        product={el}
        id={el.id}
        name={el.name}
        brand={el.brand}
        inStock={el.inStock}
        gallery={el.gallery}
        description={el.description}
        category={el.category}
        attributes={el.attributes}
        prices={el.prices}
        currentCurrency={this.props.currentCurrency}
        sendProductToCart={this.props.sendProductToCart}
        removeProductFromCart={this.props.removeProductFromCart}
        cartItems={this.props.cartItems}
      />
    })
    return (
      <StyledContent>
        <StyledCategory>{categoryText}</StyledCategory>
        <StyledProducts>{mappedProducts}</StyledProducts>
      </StyledContent>
    )
  }
}
