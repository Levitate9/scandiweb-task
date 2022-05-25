import React from 'react'
import styled from 'styled-components'
import GalleryItem from './GalleryItem/GalleryItem'

const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 79px;
  max-height: 
`

export default class ProductGallery extends React.Component {
  render() {
    const mappedGalleryItems =  
      this.props.gallery.map((el) => <GalleryItem 
        key={el} 
        id={el}
        src={el}
        mainPhotoSrc={this.props.mainPhotoSrc}
        setMainPhoto={this.props.setMainPhoto} />)
    return (
      <StyledGallery>
        { mappedGalleryItems }
      </StyledGallery>
    )
  }
}