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
  width: 63px;
  height: 45px;
  border: 1px solid #1D1F22;
  box-sizing: border-box;
  user-select: none;

  &.product,
  &.cart {
    margin: 10px 10px 0 0;
  }

  &.cartOverlay {
    font-size: 14px;
    margin: 8px 8px 0 0;

    &.capacity {
      width: 56px;
      height: 25px;
    }

    &.size {
      width: 24px;
      height: 24px;
    }

    &.usb3,
    &.touchID {
      width: 40px;
      height: 25px;
    }
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
      width: 32px;
      height: 32px;
    }

    &.cartOverlay {
      width: 16px;
      height: 16px;
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

  &.capacity.selected,
  &.size.selected,
  &.usb3.selected,
  &.touchID.selected {
    color: #ffffff;
    background-color: #1D1F22;
  }

  &.color.selected {
    outline: 1px solid #5ECE7B;
    outline-offset: 2px;
  }

  &.capacity.disabled,
  &.size.disabled,
  &.usb3.disabled,
  &.touchID.disabled {
    color: #A6A6A6;
    background-color: rgba(166, 166, 166, 0.2);
    border: 1px solid #A6A6A6;
  }
 
  &:hover.disabled {
    cursor: default;
  }

  &.cartOverlay.usb3,
  &.cartOverlay.touchID {
    width: 40px;
  }
`

export default class AttributeValue extends React.Component {
  setSelected() {
    this.props.toggleSelected(this.props.attrName, this.props.id)
  }

  render() {
    let attrClass 
    if (this.props.attrName === 'With USB 3 ports') {
      attrClass = 'usb3'
    } else if (this.props.attrName === 'Touch ID in keyboard') {
      attrClass = 'touchID'
    } else {
      attrClass = this.props.attrName.toLowerCase()
    }

    let disabled = (this.props.type !== 'product' && 'disabled') || ''
    return ( 
      <StyledAttributeValue
        id={this.props.id}
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