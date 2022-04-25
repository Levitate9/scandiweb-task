import React from 'react'
import styled from 'styled-components'

const StyledGalleryItem = styled.div`
  width: 79px;
  height: 80px;
  margin: 0 0 40px 0;

  & img {
    width: 79px;
    height: 80px;

    &:hover {
      cursor: pointer;
    }

    &.selected {
      outline: 2px solid #5ECE7B;
    }
  }
`

export default class GalleryItem extends React.Component {

  componentDidMount() {
   if (document.getElementsByClassName('galleryImage')[0].classList.contains('selected')) {
     return null
   } else {
     return document.getElementsByClassName('galleryImage')[0].classList.add('selected') 
   }
  }

  onItemSelected(e) {
    let img = document.getElementsByClassName('galleryImage')
    Array.from(img).map((el) => el.classList.contains('galleryImage') && el.classList.remove('selected'))
    document.getElementById(e.target.id).classList.add('selected')
    document.getElementById('mainPhoto').setAttribute('src', e.target.src)
  }

  render() {
    return (
      <StyledGalleryItem>
        <img src={this.props.src} alt='item' className='galleryImage' id={this.props.id}
          onClick={this.onItemSelected.bind(this)} />
      </StyledGalleryItem>
    )
  }
}