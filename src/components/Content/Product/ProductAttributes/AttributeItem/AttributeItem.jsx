import React from 'react'
import styled from 'styled-components'
import AttributeValue from './AttributeValue/AttributeValue'

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
  render() {
    const mappedValues = this.props.items.map((el) => <AttributeValue 
      key={el.id}
      id={el.id}
      displayValue={el.displayValue} 
      value={el.value}
      type={this.props.type}
      isSelected={el.isSelected}
      toggleSelected={this.props.toggleSelected}
      attrName={this.props.name}
    />)

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