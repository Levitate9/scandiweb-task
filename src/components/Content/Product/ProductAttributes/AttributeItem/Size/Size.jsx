import React from 'react'
import styled from 'styled-components'

const StyledSize = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 45px;
  margin: 0 8px 0 0;
  border: 1px solid #1D1F22;
  box-sizing: border-box;
  user-select: none;

  &.sizeCartOverlay {
    width: 24px;
    height: 24px;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 14px;
  }

  &.sizeCartOverlay:nth-child(4n+4) {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
  }

  &.selected {
    color: #ffffff;
    background-color: #1D1F22;
  }

  &.disabled {
    color: #A6A6A6;
    background-color: rgba(166, 166, 166, 0.2);
    border: 1px solid #A6A6A6;
  }

  &:hover.disabled {
    cursor: default;
  }
`

export default class Size extends React.Component {

  render() {
    return (
      <StyledSize
        id={this.props.id} 
        className={this.props.className}
        value={this.props.value}
        onClick={this.props.onSelect.bind(this)}
      >{this.props.value}</StyledSize>
    )
  }
}