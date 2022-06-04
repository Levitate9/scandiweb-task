import React from 'react'
import styled from 'styled-components'

const StyledTouchID = styled.div`
  margin: 0 10px 0 0;
  border-radius: 3px;
  outline: 1px solid #bababa;
  font-family: 'Source Sans Pro';

  &.product, 
  &.cart {
    width: 28px;
    margin: 0 10px 0 0;
    padding: 4px 8px;
    font-size: 16px;
  }

  &.cartOverlay {
    width: 24px;
    margin: 0 6px 0 2px;
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

export default class TouchID extends React.Component {
  setSelected() {
    this.props.toggleSelected(this.props.attrName, this.props.id)
  }

  render() {
    let disabled = (this.props.type !== 'product' && 'disabled') || ''
    return (
      <StyledTouchID
        id={this.props.id}
        value={this.props.value}
        className={`${this.props.className} ${this.props.isSelected ? 'selected' : disabled}`}
        onClick={this.setSelected.bind(this)}
      >{this.props.displayValue}</StyledTouchID>
    )
  }
}