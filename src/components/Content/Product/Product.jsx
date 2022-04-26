import React from 'react'
import styled from 'styled-components'
import AttributeItem from './AttributeItem/AttributeItem'
import withParams from '../../../hocs/hocs'
import GalleryItem from './GalleryItem/GalleryItem'
import { GET_PRODUCT } from '../../../graphql/Queries'
import Preloader from '../../common/Preloader'

const StyledProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1240px;
  margin: 80px 100px 0 100px;
`

const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 79px;
  max-height: 
`

const StyledMainPhoto = styled.div`
  width: 610px;
  height: 511px;
  margin: 0 100px 0 40px;
  background-image: url(${props => props.src});
  background-size: cover;
`

const StyledAttributes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 292px;
`

const StyledBrand = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1D1F22;
`

const StyledProductName = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  color: #1D1F22;
  margin: 16px 0;
`

const StyledPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const StyledPriceCategory = styled.div`
  font-family: 'Roboto Condensed';
  font-style: 'normal';
  font-weight: 700;
  font-size: 18px;
  margin: 24px 0 0 0;
  line-height: 18px;
  color: #1D1F22;
  text-transform: uppercase;
`

const StyledAmount = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  color: #1D1F22;
  margin: 10px 0 20px 0;
`

const StyledAddToCart = styled.button`
  width: 292px;
  height: 52px;
  margin: 0 0 20px 0;
  padding: 16px 32px;
  text-transform: uppercase;
  border: none;
  color: #ffffff;
  background-color: #5ECE7B;

  &:hover {
    cursor: pointer;
  }

  & span {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`

const StyledProductDescription = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #1D1F22;
  text-align: left;
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

    const mappedGalleryItems = !this.state.isLoading && 
      this.state.gallery.map((el) => <GalleryItem src={el} key={el} id={el} setMainPhoto={this.setMainPhoto} />)

    const mappedAttributeItems = !this.state.isLoading &&
      this.state.attributes.map((el) => <AttributeItem name={el.name} items={el.items} key={el.id} />)

    const symbol = this.props.currentCurrency.symbol

    const amount = !this.state.isLoading &&
      this.state.prices.filter((el) => el.currency.label === this.props.currentCurrency.label)[0].amount

    const parse = require('html-react-parser')

    return (
      <StyledProduct>
        <StyledGallery>
          { mappedGalleryItems }
        </StyledGallery>
        <StyledMainPhoto src={this.state.mainPhoto} id='mainPhoto'></StyledMainPhoto>
        <StyledAttributes>
          <StyledBrand>{this.state.brand}</StyledBrand>
          <StyledProductName>{this.state.name}</StyledProductName>
          { mappedAttributeItems }
          <StyledPrice>
            <StyledPriceCategory>price:</StyledPriceCategory>
            <StyledAmount>{`${symbol}${amount}`}</StyledAmount>
          </StyledPrice>
          <StyledAddToCart><span>add to cart</span></StyledAddToCart>
          <StyledProductDescription>{ parse(this.state.description) }</StyledProductDescription>
        </StyledAttributes>
      </StyledProduct>
    )
  }
}

export default withParams(Product)