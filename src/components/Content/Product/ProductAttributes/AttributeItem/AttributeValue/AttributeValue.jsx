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

  &.color {
    background-color: ${props => props.value};
    ${props => props.id === 'White' && `outline: 1px solid #bababa;`}
    border: none;
    width: 32px;
    height: 32px;
  }

  &.color.selected {
    outline: 2px solid #5ECE7B !important;
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

  &.disabled {
    color: #A6A6A6;
    background-color: rgba(166, 166, 166, 0.2);
    border: 1px solid #A6A6A6;
  }
  
  &:hover.disabled {
    cursor: default;
  }

  &:hover .tooltipproduct, 
  &:hover .tooltipcart, 
  &:hover .tooltipcartOverlay {
    visibility: visible;
  }

  &:hover.disabled .tooltipproduct, 
  &:hover.disabled .tooltipcart, 
  &:hover.disabled .tooltipcartOverlay {
    visibility: hidden;
  }

  &.cartOverlay {
    width: 24px;
    height: 24px;
    font-size: 14px;
  }

  &.cartOverlay.usb3,
  &.cartOverlay.touchID {
    width: 40px;
  }

  &.cartOverlay.capacity {
    width: 50px;
  }


  &.cartOverlay.color {
    width: 16px;
    height: 16px;
  }

  &.cartOverlay.color.disabled,
  &.cart.color.disabled {
    outline: none !important;
  }
`

const Background = styled.div`
  position: relative;
  visibility: ${props => props.attrName === 'Color' ? 'visible' : 'hidden' };
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 8px 8px 0 0;

  &.product, &.cart {
    width: 63px;
    height: 45px;
    margin: 0 10px 10px 0;
  }

  &.color {
    width: 32px;
    height: 32px;
  }

  &.cartOverlay.color {
    width: 16px;
    height: 16px;
  }
`

const Tooltip = styled.span`
  visibility: hidden;
  position: absolute;
  font-family: 'Source Sans Pro';
  font-size: 12px;
  width: 50px;
  margin-left: -25px;
  padding: 5px 0;
  border-radius: 3px;
  color: #1D1F22;
  background-color: #ffffff;
  top: 120%;
  left: 50%;
  text-align: center;
  box-shadow: 0px 2px 15px rgba(168, 172, 176, 0.3);
  z-index: 1;

  &::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
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
      <Background className={`${this.props.type} ${attrClass}`} attrName={this.props.attrName}>
        <StyledAttributeValue
          id={this.props.id}
          value={this.props.value}
          className={`${this.props.type} ${attrClass} ${this.props.isSelected ? 'selected' : disabled}`}
          onClick={this.props.type === 'product' ? this.setSelected.bind(this) : null}
        >{ this.props.attrName === 'Color' 
            ? <Tooltip className={`tooltip${this.props.type}`}>{this.props.displayValue}</Tooltip> 
            : this.props.attrName === 'Size' ? this.props.value : this.props.displayValue }      
        </StyledAttributeValue>
      </Background>
    )
  }
}