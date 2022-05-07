import React from 'react'
import styled from 'styled-components'
import withParams from '../../../hocs/hocs'
import { GET_PRODUCT } from '../../../graphql/Queries'
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
    this.state = { isLoading: true }
    this.setMainPhoto = this.setMainPhoto.bind(this)
  }

  componentDidMount() {
    this.props.client
      .query({ 
        query: GET_PRODUCT,
        variables: { id: this.props.params.id }
       })
      .then((result) => this.setState({
        ...this.state,
        product: result.data.product,
        id: result.data.product.id,
        name: result.data.product.name,
        gallery: result.data.product.gallery,
        description: result.data.product.description,
        category: result.data.product.category,
        attributes: result.data.product.attributes,
        prices: result.data.product.prices,
        brand: result.data.product.brand,
        mainPhoto: result.data.product.gallery[0],
        isLoading: false
      }))
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
        <ProductGallery gallery={this.state.gallery} setMainPhoto={this.setMainPhoto} />
        <ProductMainPhoto src={this.state.mainPhoto} />
        <ProductAttributes 
          brand={this.state.brand}
          name={this.state.name}
          attributes={this.state.attributes} 
          currentCurrency={this.props.currentCurrency}
          prices={this.state.prices}
          description={this.state.description}
        />
      </StyledProduct>
    )
  }
}

export default withParams(Product)