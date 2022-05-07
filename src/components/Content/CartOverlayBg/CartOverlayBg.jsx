import React from 'react'
import styled from 'styled-components'

const StyledBg = styled.div`
  position: fixed;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  width: 1440px;
  height: 100vh;
  top: 78px;
  background: rgba(57, 55, 72, 0.22);
  z-index: 14;

  &.open {
    visibility: visible;
  }
`

export default class CartOverlayBg extends React.Component {
  toggleBg() {
    this.props.toggleIsCartOverlayOpen()
  }

  render() {
    return (
      <StyledBg isOpen={this.props.isCartOverlayOpen} onClick={this.toggleBg.bind(this)}></StyledBg>
    )
  }
}