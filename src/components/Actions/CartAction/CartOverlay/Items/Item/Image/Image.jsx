import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.div`
  width: 121px;
  height: 190px;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`

export default class Image extends React.Component {
  render() {
    return (
      <StyledImage src={this.props.gallery[0]}></StyledImage>
    )
  }
}