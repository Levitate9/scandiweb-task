import React from 'react'
import styled from 'styled-components'

const StyledGalleryItem = styled.div`
  width: 79px;
  height: 80px;
  margin: 0 0 40px 0;
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    outline: 2px solid #5ECE7B;
  }
`

export default class GalleryItem extends React.Component {
  onItemSelected(e) {
    this.props.setMainPhoto(e.target.id)
  }

  render() {
    return (
      <StyledGalleryItem 
        src={this.props.src}
        className={`galleryImage ${this.props.src === this.props.mainPhotoSrc ? 'selected' : ''}`} 
        id={this.props.id}
        onClick={this.onItemSelected.bind(this)} >
      </StyledGalleryItem>
    )
  }
}