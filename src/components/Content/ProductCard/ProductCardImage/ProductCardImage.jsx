import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledImg = styled.div`
  margin: 16px 16px 24px 16px;
`

const StyledNavLink = styled(NavLink)`
  position: absolute;
  width: 356px;
  height: 338px;
  z-index: 10;

  &.brand {
    position: relative;
    text-decoration: none;
  }
`

const StyledWrapper = styled.div`
  &.info {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 9;
    & span {
      position: absolute;
      top: 35%;
      left: 20%;
      font-size: 24px;
      font-weight: 400;
      line-height: 38px;
      color: #8D8F9A;
      text-transform: uppercase;
      opacity: 1;
      user-select: none;
    }
  }
`

const ProductImg = styled.div`
  position: absolute;
  width: 356px;
  height: 338px;
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 8;
`

export default class ProductCardImage extends React.Component {
  render() {
    return (
      <StyledImg>
        <StyledNavLink to={`/${this.props.category}/${this.props.id}`} /> 
        { !this.props.inStock && <StyledWrapper className='info'><span>out of stock</span></StyledWrapper> }
        <ProductImg src={this.props.src}></ProductImg>
      </StyledImg>
    )
  }
}