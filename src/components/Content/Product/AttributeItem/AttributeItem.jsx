import React from 'react'
import styled from 'styled-components'
import AttributeValue from './AttributeValue/AttributeValue'

const StyledAttributeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 12px 0;
`

const StyledCategory = styled.div`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin: 8px 0;
  color: #1D1F22;
  text-transform: uppercase;
`

const StyledAttributesValues = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
`

export default class AttributeItem extends React.Component {
  render() {
    const mappedValues = this.props.items.map((el) => {
      return <AttributeValue 
        key={el.id}
        className={this.props.name} 
        displayValue={el.displayValue}
        value={el.value}
        id={el.id}
      />
    })

    return (
      <StyledAttributeItem>
        <StyledCategory>{this.props.name}:</StyledCategory>
        <StyledAttributesValues>
          { mappedValues }
        </StyledAttributesValues>
      </StyledAttributeItem>
    )
  }
}