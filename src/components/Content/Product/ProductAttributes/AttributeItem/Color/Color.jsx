import React from 'react'
import styled from 'styled-components'

const StyledColor = styled.div`
  background-color: ${props => props.value};
  ${props => props.id === 'White' && `outline: 1px solid #bababa;`}

  &.product, &.cart {
    width: 32px;
    height: 32px;
  }

  &.cartOverlay {
    width: 16px;
    height: 16px;
  }

  &:nth-child(6n+6) {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
  }

  &.selected {
    outline: 2px solid #5ECE7B !important;
  }

  &.disabled {
    capacity: 0.2;
    outline: 2px solid #A6A6A6;
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
}
`

const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 0 8px 8px 0;

  &.product, &.cart {
    width: 36px;
    height: 36px;
    margin: 0 10px 10px 0;
  }

  &.cartOverlay {
    width: 20px;
    height: 20px;
    margin: 0 6px 6px 2px;
  }

  &.cartOverlay:last-child {
    margin: 0 0 6px 2px;
  }
`

const Tooltip = styled.span`
  visibility: hidden;
  position: absolute;
  font-size: 12px;
  width: 50px;
  margin-left: -25px;
  padding: 5px 0;
  border-radius: 3px;
  color: #1D1F22;
  background-color: #ffffff;
  top: 130%;
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

export default class Color extends React.Component {
  setSelected(e) {
    this.props.toggleSelected(this.props.attrName, e.target.id)
  }

  render() {
    let disabled = (this.props.type !== 'product' && 'disabled') || ''
    return (
      <Background className={this.props.className}>
        <StyledColor 
          id={this.props.id} 
          className={`${this.props.className} ${this.props.isSelected ? 'selected' : disabled}`} 
          value={this.props.value}
          onClick={this.setSelected.bind(this)}
        ><Tooltip className={`tooltip${this.props.className}`}>{this.props.displayValue}</Tooltip>
        </StyledColor>
      </Background>
    )
  }
}