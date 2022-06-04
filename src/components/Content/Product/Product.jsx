import React from 'react'
import styled from 'styled-components'
import withParams from '../../../hocs/hocs'
import Preloader from '../../common/Preloader'
import ProductGallery from './ProductGallery/ProductGallery'
import ProductMainPhoto from './ProductMainPhoto/ProductMainPhoto'
import ProductAttributes from './ProductAttributes/ProductAttributes'
import { GET_PRODUCT } from '../../../graphql/Queries'

const StyledProduct = styled.div`
  position: relative;
  top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1240px;
  margin: 80px 100px 0 100px;
`

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = { product: {} }
    this.getProduct = this.getProduct.bind(this)
    this.setMainPhoto = this.setMainPhoto.bind(this)
    this.setDefaultSelected = this.setDefaultSelected.bind(this)
    this.toggleSelected = this.toggleSelected.bind(this)
  }

  getProduct() {
    this.props.client
      .query({ query: GET_PRODUCT, variables: { "id": this.props.params.id } })
      .then((result) => this.setState({ 
        product: result.data.product, 
        ...result.data.product,
        mainPhoto: result.data.product.gallery[0]
      }))
  }

  componentDidMount() {
    this.getProduct()
  }

  componentDidUpdate() {
    if (this.state.attributes.length > 0 && !this.state.attributes[0].items[0].hasOwnProperty('isSelected')) {
      this.setDefaultSelected()
    }
  }

  setDefaultSelected() {
    let attributes = this.state.attributes.map((attr) => {
      let items = attr.items.map((item, index) => { return { ...item, isSelected: false, order: index + 1 } })
      items = items.sort((a, b) => a.order - b.order)
      return { ...attr, items: items }
    })
    attributes = attributes.map((attr, index) => {
      let item = attr.items[0]
      item = { ...item, isSelected: true }
      return { ...attr, items: [item, ...attr.items.filter((el) => el.value !== item.value)], order: index + 1 }
    })
    attributes = attributes.sort((a, b) => a.order - b.order)
    this.setState({
      ...this.state, product: { ...this.state.product, attributes: attributes }, attributes: attributes
    })
  }

  toggleSelected(attrName, attrValue) {
    let attributes = this.state.attributes
    let targetAttr = attributes.filter((el) => el.name === attrName)[0]
    let targetItems = targetAttr.items.map((item) => { return { ...item, isSelected: false }})
    let targetItem = targetItems.filter((el) => el.id === attrValue)[0]
    let items = [ { ...targetItem, isSelected: true }, ...targetItems.filter((el) => el.id !== attrValue) ]
    items = items.sort((a, b) => a.order - b.order)
    attributes = [ { ...targetAttr, items: items }, ...attributes.filter((el) => el.name !== attrName) ]
    attributes = attributes.sort((a, b) => a.order - b.order)
    this.setState({ 
      ...this.state, product: { ...this.state.product, attributes: attributes }, attributes: attributes 
    })
  }

  setMainPhoto(src) {
    this.setState({ ...this.state, mainPhoto: src })
  }

  render() {
    if (this.state.isLoading) {
      return <Preloader />
    }
    return this.state.product.attributes && (
      <StyledProduct>
        <ProductGallery 
          gallery={this.state.gallery} 
          setMainPhoto={this.setMainPhoto} 
          mainPhotoSrc={this.state.mainPhoto} 
        />
        <ProductMainPhoto src={this.state.mainPhoto} />
        <ProductAttributes
          id={this.state.id} 
          brand={this.state.brand}
          name={this.state.name}
          attributes={this.state.attributes}
          type='product' 
          currentCurrency={this.props.currentCurrency}
          prices={this.state.prices}
          description={this.state.description}
          sendProductToCart={this.props.sendProductToCart}
          toggleSelected={this.toggleSelected}
          product={this.state.product}
          cartItems={this.props.cartItems}
          inStock={this.state.inStock}
        />
      </StyledProduct>
    )
  }
}

export default withParams(Product)