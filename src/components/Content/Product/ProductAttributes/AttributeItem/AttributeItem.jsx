import React from 'react'
import styled from 'styled-components'
import Color from './Color/Color'
import Size from './Size/Size'
import Capacity from './Capacity/Capacity'
import Usb3 from './Usb3/Usb3'
import TouchID from './TouchID/TouchID'

const StyledAttributeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 12px 0;

  &.cartOverlay {
    margin: 8px 0 0 0;
  }
`

const StyledCategory = styled.div`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin: 0 0 8px 0;
  color: #1D1F22;
  text-transform: uppercase;

  &.cartOverlay {
    font-weight: 400;
    font-size: 14px;
    text-transform: none;
  }
`

const StyledAttributesValues = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
`

export default class AttributeItem extends React.Component {

  componentDidMount() {
    switch (this.props.className) {
      case 'Color':
        return this.addSelected('color')
      case 'Capacity':
        console.log()
        return this.addSelected('capacity')
      case 'Size':
        return this.props.cartOverlay ? this.addSelected('sizeCartOverlay') : this.addSelected('size')
      case 'With USB 3 ports':
        return this.addSelected('usb3')
      case 'Touch ID in keyboard':
        return this.addSelected('touchID')
      default:
    }
  }

  addSelected(className) {
    document.getElementsByClassName(className)[0].classList.add('selected')
  }

  addDisabled(className) {
    document.getElementsByClassName(className)[0].classList.add('disabled')
  }

  onSelect(e) {
    let divs = document.getElementsByClassName(this.props.className)
    Array.from(divs).map((el) => el.classList.contains('selected') && el.classList.remove('selected'))
    document.getElementById(e.target.id).classList.add('selected')
  }

  render() {
    console.log(this.props.type)
    const mappedValues = this.props.items.map((el) => {
      const createAttr = (Component, className) => 
        <Component 
          key={el.id}
          id={el.id}
          displayValue={el.displayValue} 
          value={el.value}
          className={className}
          onSelect={this.onSelect}
          type={this.props.type}
      />
  
      switch (this.props.name) {
        case 'Size':
          return createAttr(Size, 'size')
        case 'Color':
          return createAttr(Color, 'color')
        case 'Capacity':
          return createAttr(Capacity, 'capacity')
        case 'With USB 3 ports':
          return createAttr(Usb3, 'usb3')
        case 'Touch ID in keyboard':
          return createAttr(TouchID, 'touchID')
        default:
      }

      return null
    })

    return (
      <StyledAttributeItem className={this.props.type || ''}>
        <StyledCategory className={this.props.type || ''}>
          {this.props.name}:
        </StyledCategory>
        <StyledAttributesValues>
          { mappedValues }
        </StyledAttributesValues>
      </StyledAttributeItem>
    )
  }
}