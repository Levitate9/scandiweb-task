import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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

export default class ProductCardContent extends React.Component {
  render() {
    return (
      <StyledContent>
        <StyledName>
          { (this.props.inStock) 
              ? <StyledNavLink 
                  to={`/${this.props.category}/${this.props.id}`} 
                  className='brand'
                >{`${this.props.brand} ${this.props.name}`}</StyledNavLink> 
              : <div>{`${this.props.brand} ${this.props.name}`}</div>
          }
      </StyledName>
      <StyledPrice>{`${this.props.symbol} ${this.props.price}`}</StyledPrice>
    </StyledContent>
    )
  }
}