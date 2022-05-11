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

  &.cartOverlayItem {
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

  &.cartOverlayCategory {
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
  constructor(props) {
    super(props)
    this.state = { selectedValue: this.props.items[0].displayValue }
    this.setSelectedValue = this.setSelectedValue.bind(this)
  }

  setSelectedValue(value) { 
    this.setState({ ...this.state, selectedValue: value })
  }

  render() {
    const mappedValues = this.props.items.map((el) => {
      const createAttr = (Component) => 
        <Component 
          key={el.id}
          id={el.id}
          displayValue={el.displayValue} 
          value={el.value}
          className={this.props.type}
          selectedValue={this.state.selectedValue}
          setSelectedValue={this.setSelectedValue}
      />
  
      switch (this.props.name) {
        case 'Size':
          return createAttr(Size)
        case 'Color':
          return createAttr(Color)
        case 'Capacity':
          return createAttr(Capacity)
        case 'With USB 3 ports':
          return createAttr(Usb3)
        case 'Touch ID in keyboard':
          return createAttr(TouchID)
        default:
      }
      return null
    })

    return (
      <StyledAttributeItem className={`${this.props.type}Item` || ''}>
        <StyledCategory className={`${this.props.type}Category` || ''}>
          {this.props.name}:
        </StyledCategory>
        <StyledAttributesValues>
          { mappedValues }
        </StyledAttributesValues>
      </StyledAttributeItem>
    )
  }
}