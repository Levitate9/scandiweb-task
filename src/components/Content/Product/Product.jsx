import React from 'react'
import styled from 'styled-components'
import withParams from '../../../hocs/hocs'
import Preloader from '../../common/Preloader'
import ProductGallery from './ProductGallery/ProductGallery'
import ProductMainPhoto from './ProductMainPhoto/ProductMainPhoto'
import ProductAttributes from './ProductAttributes/ProductAttributes'

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
    let product = this.props.products.filter((el) => el.id === this.props.params.id)[0]
    this.state = { 
      product: product,
      id: product.id,
      name: product.name,
      brand: product.brand,
      gallery: product.gallery,
      description: product.description,
      category: product.category,
      attributes: product.attributes,
      prices: product.prices,
      mainPhoto: product.gallery[0],
      inStock: product.inStock
    }
    this.setMainPhoto = this.setMainPhoto.bind(this)
    this.setDefaultSelected = this.setDefaultSelected.bind(this)
    this.toggleSelected = this.toggleSelected.bind(this)
  }

  componentDidMount() {
    this.setDefaultSelected()
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
      return { ...attr, items: [ item, ...attr.items.filter((el) => el.value !== item.value) ], order: index + 1 }
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
    return (
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