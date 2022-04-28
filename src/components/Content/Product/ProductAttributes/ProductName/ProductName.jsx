import React from 'react'
import styled from 'styled-components'

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

export default class ProductName extends React.Component {
  render() {
    return (
      <>
        <StyledBrand>{this.props.brand}</StyledBrand>
        <StyledProductName>{this.props.name}</StyledProductName>
      </>
    )
  }
}