import React from 'react'
import styled from 'styled-components'

const StyledCartOverlayName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 136px;
  overflow-x: hidden;
  white-space: nowrap;

  & span {
    font-weight: 300;
    font-size: 16px;
    width: 136px;
    line-height: 26px;
    color: #1D1F22;
    text-align: left;
  }

  & span:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 26px;
    background: linear-gradient(90deg, transparent, #ffffff 50%);
  }
`

export default class CartOverlayName extends React.Component {
  render() {
    return (
      <StyledCartOverlayName>
        <span>{this.props.brand}</span>
        <span>{this.props.name}</span>
      </StyledCartOverlayName>
    )
  }
}