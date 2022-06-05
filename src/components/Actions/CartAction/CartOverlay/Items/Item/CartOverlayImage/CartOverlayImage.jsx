import React from 'react'
import styled from 'styled-components'
import ImageButtons from './ImageButtons/ImageButtons'

const StyledCartOverlayImage = styled.div`
  position: relative;
  width: 121px;
  height: 190px;
`

const Image = styled.div`
  width: inherit;
  height: inherit;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`

export default class CartOverlayImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { index: 0, length: this.props.gallery.length - 1 }
    this.prevImg = this.prevImg.bind(this)
    this.nextImg = this.nextImg.bind(this)
  }

  prevImg() {
    this.setState({ ...this.state, index: this.state.index === 0 ? this.state.length : this.state.index - 1 })
  }

  nextImg() {
    this.setState({ ...this.state, index: this.state.index === this.state.length ? 0 : this.state.index + 1 })
  }

  render() {
    const imageSrc = this.props.gallery[this.state.index]
    return (
      <StyledCartOverlayImage>
        <Image src={imageSrc} />
        { this.props.gallery.length > 1 && this.props.type === 'cart' &&
          <ImageButtons prevImg={this.prevImg} nextImg={this.nextImg} /> }
      </StyledCartOverlayImage>
    )
  }
}