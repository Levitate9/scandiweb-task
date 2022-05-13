import React from 'react'
import styled from 'styled-components'

const StyledMainPhoto = styled.div`
  width: 610px;
  height: 511px;
  margin: 0 100px 0 40px;
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`

export default class ProductMainPhoto extends React.Component {
  render() {
    return (
      <StyledMainPhoto src={this.props.src} id='mainPhoto'></StyledMainPhoto>
    )
  }
}