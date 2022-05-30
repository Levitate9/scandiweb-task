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

const ContentBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100vh - 80px);
  top: 80px;
  right: 0;
  background-color: rgba(57, 55, 72, 0.22);
  z-index: 11;
`

export default class BackdropLayer extends React.Component {
  toggleBackdrop() {
    this.props.isCartOverlayOpen 
      ? this.props.toggleIsCartOverlayOpen() 
      : this.props.toggleIsCurrencySwitcherOpen()
  }

  render() {
    return (
      <>
        <StyledBackdropLayer 
          isOpen={this.props.isCartOverlayOpen || this.props.isCurrencySwitcherOpen} 
          onClick={this.toggleBackdrop.bind(this)}
        ></StyledBackdropLayer>
        { this.props.isCartOverlayOpen && <ContentBackdrop></ContentBackdrop> }
      </>
    )
  }
}