import React from 'react'
import styled from 'styled-components'

const StyledCapacity = styled.div`
  font-family: 'Source Sans Pro';
  border-radius: 3px;
  outline: 1px solid #bababa;

  &.product, 
  &.cart {
    width: 48px;
    margin: 0 10px 10px 0;
    padding: 4px 8px;
    font-size: 16px;
  }

  &.cartOverlay {
    width: 40px;
    margin: 0 6px 6px 2px;
    padding: 4px 4px;
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
  }

  &:nth-child(5n+5) {
    margin: 0 0 10px 0;
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

export default class Capacity extends React.Component {
  setSelected() {
    this.props.toggleSelected(this.props.attrName, this.props.id)
  }

  render() {
    let disabled = (this.props.type !== 'product' && 'disabled') || ''
    return (
      <StyledCapacity
        id={this.props.id} 
        className={`${this.props.className} ${this.props.isSelected ? 'selected' : disabled}`}
        value={this.props.value}
        onClick={this.setSelected.bind(this)}
      >{this.props.value}</StyledCapacity>
    )
  }
}