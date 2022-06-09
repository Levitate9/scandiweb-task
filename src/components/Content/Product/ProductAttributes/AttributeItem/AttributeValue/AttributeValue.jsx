import React from 'react'
import styled from 'styled-components'

const StyledAttributeValue = styled.div`
  visibility: visible;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Source Sans Pro';
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #1D1F22;
  box-sizing: border-box;
  user-select: none;
  padding: 2px 4px;

  &.product,
  &.cart {
    min-width: 63px;
    min-height: 45px;
    margin: 10px 12px 0 0;
  }

  &.product:nth-child(5n + 5),
  &.cart:nth-child(5n + 5) {
    margin: 10px 0 0 0;
  }

  &.product:last-child,
  &.cart:last-child {
    margin: 10px 0 0 0;
  }

  &.cartOverlay {
    font-size: 14px;
    margin: 8px 8px 0 2px;
  }

  &.cartOverlay:last-child {
    margin: 8px 0 2px 0;
  }

  &.color {
    background-color: ${props => props.value};
    ${props => props.id === 'White' && `outline: 1px solid #bababa;`}
    border: none;

    &.product,
    &.cart {
      min-width: 32px;
      min-height: 32px;
    }

    &.cartOverlay {
      min-width: 16px;
      min-height: 16px;
    }
  }

  &:hover.product {
    cursor: pointer;
  }

  &:hover.cartOverlay,
  &:hover.cart,
  &:hover.disabled {
    cursor: default
  }

  &.selected {
    color: #ffffff;
    background-color: #1D1F22;
  }

  &.color.selected {
    outline: 1px solid #5ECE7B;
    outline-offset: 2px;
    background-color: ${props => props.value};
  }
`

export default class AttributeValue extends React.Component {
  setSelected() {
    this.props.toggleSelected(this.props.attrName, this.props.id)
  }

  render() {
    let attrClass = this.props.attrName.toLowerCase()
    let disabled = (this.props.type !== 'product' && 'disabled') || ''
    return ( 
      <StyledAttributeValue
        id={this.props.id}
        attrName={this.props.attrName}
        value={this.props.value}
        className={`${this.props.type} ${attrClass} ${this.props.isSelected ? 'selected' : disabled}`}
        onClick={this.props.type === 'product' ? this.setSelected.bind(this) : null}
      >{ this.props.attrName === 'Color' 
          ? null 
          : this.props.attrName === 'Size' ? this.props.value : this.props.displayValue }      
      </StyledAttributeValue>
    )
  }
}