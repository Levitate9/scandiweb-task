import React from 'react'
import styled from 'styled-components'

const StyledBackdropLayer = styled.div`
  position: fixed;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  width: 1440px;
  height: 100vh;
  top: 0;
  background: rgba(57, 55, 72, 0.22);
  z-index: 14;
`

export default class BackdropLayer extends React.Component {
  toggleBackdrop() {
    if (this.props.isCartOverlayOpen) {
      this.props.toggleIsCartOverlayOpen()
    } else if (this.props.isCurrencySwitcherOpen) {
      this.props.toggleIsCurrencySwitcherOpen()
    }
    return null
  }

  render() {
    return (
      <StyledBackdropLayer 
        isOpen={this.props.isCartOverlayOpen || this.props.isCurrencySwitcherOpen} 
        onClick={this.toggleBackdrop.bind(this)}
      ></StyledBackdropLayer>
    )
  }
}