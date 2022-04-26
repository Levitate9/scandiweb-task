import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import cart from '../../../images/whiteCart.png'

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
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.3);
  }

  &:hover > .cart {
    display: flex;
  }
`

const StyledNavLink = styled(NavLink)`
  position: absolute;
  width: 356px;
  height: 338px;
  z-index: 10;
`

const StyledImg = styled.div`
  margin: 16px 16px 24px 16px;
`

const ProductImg = styled.div`
  position: absolute;
  width: 356px;
  height: 338px;
  background-image: url(${props => props.src});
  background-size: cover;
  z-index: 9;
`

const StyledContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 354px;
  height: 58px;
  left: 16px;
  top: 370px;
  margin: 0;
  padding: 0;
`

const StyledName = styled.div`
  align-self: stretch;
  color: #1D1F22;
  font-weight: 300;
  font-size: 18px;
  line-height: 29px;
  text-align: left;
`

const StyledPrice = styled(StyledName)`
  font-weight: 500;
`

const StyledButton = styled.button`
  position: absolute;
  right: 31px;
  bottom: 64px;
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background-color: #1D1F22;
  z-index: 11;

  &:hover {
    cursor: pointer;
    background-color: #5ECE7B
  }

  & img {
    width: 24px;
    height: 24px;
    margin-left: -2px;
  }
`

export default class ProductCard extends React.Component {
  render() {
    const imgSrc = this.props.gallery[0]
    const brand = this.props.brand
    const name = this.props.name
    const price = this.props.prices.filter((el) => el.currency.label === this.props.currentCurrency.label)[0].amount
    
    const symbol = this.props.currentCurrency.symbol
    const category = this.props.category
    const id = this.props.id
    return (
      <StyledProductCard>
        <StyledImg>
          <StyledNavLink to={`/${category}/${id}`} />
          <ProductImg src={imgSrc}></ProductImg>
        </StyledImg>
        <StyledButton className='cart'>
          <img src={cart} alt='cart' />
        </StyledButton>
        <StyledContent>
          <StyledName>{`${brand} ${name}`}</StyledName>
          <StyledPrice>{`${symbol} ${price}`}</StyledPrice>
        </StyledContent>
      </StyledProductCard>
    )
  }
}