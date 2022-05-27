import React from 'react'
import styled from 'styled-components'

const StyledBackdropLayer = styled.div`
  position: fixed;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  background: transparent;
  z-index: 12;
`

export default class BackdropLayer extends React.Component {
  toggleBackdrop() {
    this.props.isCartOverlayOpen 
      ? this.props.toggleIsCartOverlayOpen() 
      : this.props.toggleIsCurrencySwitcherOpen()
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