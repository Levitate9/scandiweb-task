import React from 'react'
import styled from 'styled-components'

const StyledGalleryItem = styled.div`
  width: 79px;
  height: 80px;
  margin: 0 0 40px 0;

  & img {
    width: 79px;
    height: 80px;
  }
`

export default class GalleryItem extends React.Component {
  render() {
    return (
      <StyledGalleryItem>
        <img src={this.props.src} alt='item' />
      </StyledGalleryItem>
    )
  }
}