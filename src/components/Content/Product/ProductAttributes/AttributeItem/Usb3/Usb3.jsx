import React from 'react'
import styled from 'styled-components'

const StyledUsb3 = styled.div`
  margin: 0 10px 0 0;
  border-radius: 3px;
  outline: 1px solid #bababa;

  &.product,
  &.cart {
    width: 28px;
    padding: 4px 8px;
    font-size: 16px;
  }

  &.cartOverlay {
    width: 24px;
    padding: 4px 6px;
    font-size: 14px;
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
    outline: 1px solid #A6A6A6;
  }

  &:hover.disabled {
    cursor: default;
  }
`

export default class Usb3 extends React.Component {
  setSelected(e) {
    this.props.setSelectedValue(e.target.id)
  }

  render() {
    return (
      <StyledUsb3 
        id={this.props.id}
        className={`${this.props.className} ${this.props.selectedValue === this.props.value ? 'selected' : ''}`} 
        value={this.props.value}
        onClick={this.setSelected.bind(this)}
      >{this.props.displayValue}</StyledUsb3>
    )
  }
}