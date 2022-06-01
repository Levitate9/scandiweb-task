import React from 'react'
import styled from 'styled-components'

const StyledProductDescription = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #1D1F22;
  text-align: left;
  margin-bottom: 50px;
`

export default class ProductDescription extends React.Component {
  render() {
    const parse = require('html-react-parser')
    return (
      <StyledProductDescription>{ parse(this.props.description) }</StyledProductDescription>
    )
  }
}